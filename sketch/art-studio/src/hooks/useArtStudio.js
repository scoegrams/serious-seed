import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import GIF from "gif.js";
import workerUrl from "gif.js/dist/gif.worker.js?url";
import { renderFrame } from "../canvas/renderFrame.js";
import { generateSprayPattern } from "../canvas/spray.js";
import {
  BRUSH_OPACITY_MAX,
  BRUSH_OPACITY_MIN,
  BRUSH_SIZE_MAX,
  BRUSH_SIZE_MIN,
  CANVAS_PRESETS,
  DEFAULT_CANVAS_SIZE,
  DEFAULT_LAYERS,
  DISPLAY_SIZE,
  RIGHT_DRAWER_WIDTH_DEFAULT,
} from "../lib/constants.js";
import { getFirebaseContext } from "../lib/firebaseClient.js";
import {
  loadSeedArt,
  saveSeedArt,
} from "../lib/seedArtPersistence.js";
import { buildWords, letterCountsFromWords } from "../lib/words.js";

const CHECKLIST_STORAGE_KEY = "ssas-seed-checklist-v1";
const MAX_STROKE_UNDO = 50;

function cloneStrokes(strokes) {
  return JSON.parse(JSON.stringify(strokes));
}

/** Skip shortcuts while typing in real text fields (word search, prompts, etc.). */
function isTypingInEditable(el) {
  if (!el || el.nodeType !== 1) return false;
  const tag = el.tagName?.toLowerCase();
  if (tag === "textarea") return true;
  if (tag === "select") return true;
  if (tag === "input") {
    const t = (el.type || "text").toLowerCase();
    if (
      t === "range" ||
      t === "color" ||
      t === "checkbox" ||
      t === "radio" ||
      t === "button" ||
      t === "file" ||
      t === "hidden"
    ) {
      return false;
    }
    return true;
  }
  if (el.isContentEditable) return true;
  return false;
}

function loadCheckedIds() {
  try {
    const raw = localStorage.getItem(CHECKLIST_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((n) => Number.isInteger(n) && n >= 1 && n <= 2048)
      : [];
  } catch {
    return [];
  }
}

function getPos(canvas, e, width, height) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: (clientX - rect.left) * (width / rect.width),
    y: (clientY - rect.top) * (height / rect.height),
    screenX: clientX - rect.left,
    screenY: clientY - rect.top,
  };
}

export function useArtStudio() {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const brushPreviewRef = useRef(null);

  const strokesRef = useRef([]);
  const currentStrokeRef = useRef(null);
  const isDrawingRef = useRef(false);

  const themeRef = useRef("light");
  const layersRef = useRef(DEFAULT_LAYERS);
  const activeLayerIdRef = useRef(2);
  const currentToolRef = useRef("pencil");
  const paintColorRef = useRef("#000000");
  const brushSizeRef = useRef(2);
  const brushOpacityRef = useRef(1);
  const currentWordRef = useRef(null);

  const userRef = useRef(null);
  const firebaseRef = useRef(null);
  const loadRetryTimeoutRef = useRef(null);
  const loadGenerationRef = useRef(0);
  const undoPastRef = useRef([]);
  const redoFutureRef = useRef([]);
  const opacityDigitBufferRef = useRef("");
  const opacityDigitTimerRef = useRef(null);

  const [theme, setTheme] = useState("light");
  const [currentTool, setCurrentTool] = useState("pencil");
  const [paintColor, setPaintColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(2);
  const [brushOpacity, setBrushOpacity] = useState(1);
  const [canvasSize, setCanvasSize] = useState(DEFAULT_CANVAS_SIZE);
  const [rightDrawerWidth, setRightDrawerWidth] = useState(
    RIGHT_DRAWER_WIDTH_DEFAULT,
  );
  const [layers, setLayers] = useState(DEFAULT_LAYERS);
  const [activeLayerId, setActiveLayerId] = useState(2);
  const words = useMemo(() => buildWords(), []);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [wordFilter, setWordFilter] = useState("");
  const [letterFilter, setLetterFilter] = useState(null);
  const [checkedIds, setCheckedIds] = useState(loadCheckedIds);
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState({
    visible: false,
    text: "",
    error: false,
  });

  currentWordRef.current = currentWord;

  useEffect(() => {
    try {
      localStorage.setItem(
        CHECKLIST_STORAGE_KEY,
        JSON.stringify([...checkedIds].sort((a, b) => a - b)),
      );
    } catch {
      /* ignore quota */
    }
  }, [checkedIds]);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    layersRef.current = layers;
  }, [layers]);

  useEffect(() => {
    activeLayerIdRef.current = activeLayerId;
  }, [activeLayerId]);

  useEffect(() => {
    currentToolRef.current = currentTool;
  }, [currentTool]);

  useEffect(() => {
    paintColorRef.current = paintColor;
  }, [paintColor]);

  useEffect(() => {
    brushSizeRef.current = brushSize;
  }, [brushSize]);

  useEffect(() => {
    brushOpacityRef.current = brushOpacity;
  }, [brushOpacity]);

  const showStatus = useCallback((text, error = false) => {
    setStatus({ visible: true, text, error });
    setTimeout(() => {
      setStatus((s) => ({ ...s, visible: false }));
    }, 2000);
  }, []);

  const clearStrokeUndoStacks = useCallback(() => {
    undoPastRef.current = [];
    redoFutureRef.current = [];
  }, []);

  const updateBrushPreview = useCallback(() => {
    const canvas = canvasRef.current;
    const brushPreview = brushPreviewRef.current;
    if (!canvas || !brushPreview) return;
    // Use DISPLAY_SIZE because the canvas CSS size is always DISPLAY_SIZE
    const scale = DISPLAY_SIZE / (canvasSize || DEFAULT_CANVAS_SIZE);
    const tool = currentToolRef.current;
    const size = brushSizeRef.current;
    const opacity = brushOpacityRef.current;
    const displaySize = (tool === "stamp" ? size * 2.5 : size) * scale;
    brushPreview.style.width = `${displaySize}px`;
    brushPreview.style.height = `${displaySize}px`;
    brushPreview.style.borderRadius =
      tool === "stamp" || tool === "eraser" || tool === "marker" ? "0px" : "50%";
    brushPreview.style.opacity = tool === "eraser" ? "1.0" : String(opacity);
  }, [canvasSize]);

  useEffect(() => {
    const { auth, db, appId } = getFirebaseContext();
    firebaseRef.current = { db, appId };
    if (!auth) {
      console.warn("Firebase not configured; cloud save disabled.");
      return;
    }
    signInAnonymously(auth).catch((e) => console.error("Auth failed", e));
    return onAuthStateChanged(auth, (u) => {
      userRef.current = u;
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const ctx = canvas.getContext("2d", { alpha: false });
    let raf = 0;
    const loop = () => {
      renderFrame(ctx, canvasSize, canvasSize, {
        theme: themeRef.current,
        strokes: strokesRef.current,
        layers: layersRef.current,
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [canvasSize]);

  const loadArt = useCallback(
    async (seedId) => {
      const gen = loadGenerationRef.current;
      const { db, appId } = firebaseRef.current || {};
      if (!db) {
        strokesRef.current = [];
        clearStrokeUndoStacks();
        setLayers([...DEFAULT_LAYERS]);
        setActiveLayerId(2);
        activeLayerIdRef.current = 2;
        showStatus("LOCAL MODE (NO FIREBASE)", false);
        return;
      }
      if (!userRef.current) {
        if (loadRetryTimeoutRef.current) {
          clearTimeout(loadRetryTimeoutRef.current);
        }
        loadRetryTimeoutRef.current = setTimeout(() => {
          loadRetryTimeoutRef.current = null;
          void loadArt(seedId);
        }, 500);
        return;
      }
      try {
        const data = await loadSeedArt({ db, appId, seedId });
        if (gen !== loadGenerationRef.current) return;
        if (data) {
          strokesRef.current = data.strokes;
          clearStrokeUndoStacks();
          setLayers(data.layers);
          if (data.layers.length > 0) {
            setActiveLayerId(data.layers[0].id);
            activeLayerIdRef.current = data.layers[0].id;
          }
          showStatus(
            `LOADED: ${currentWordRef.current.text.toUpperCase()}`,
            false,
          );
        } else {
          strokesRef.current = [];
          clearStrokeUndoStacks();
          setLayers([...DEFAULT_LAYERS]);
          setActiveLayerId(2);
          activeLayerIdRef.current = 2;
          showStatus("EMPTY CANVAS", false);
        }
      } catch (e) {
        console.error("Load failed", e);
      }
    },
    [showStatus, clearStrokeUndoStacks],
  );

  useEffect(() => {
    loadGenerationRef.current += 1;
    void loadArt(currentWord.id);
    return () => {
      if (loadRetryTimeoutRef.current) {
        clearTimeout(loadRetryTimeoutRef.current);
        loadRetryTimeoutRef.current = null;
      }
    };
  }, [currentWord.id, loadArt]);

  useEffect(() => {
    updateBrushPreview();
  }, [currentTool, brushSize, brushOpacity, updateBrushPreview]);

  useEffect(() => {
    window.addEventListener("resize", updateBrushPreview);
    return () => window.removeEventListener("resize", updateBrushPreview);
  }, [updateBrushPreview]);

  useEffect(() => {
    const flushOpacityDigits = () => {
      opacityDigitTimerRef.current = null;
      const s = opacityDigitBufferRef.current;
      opacityDigitBufferRef.current = "";
      if (!s) return;
      let o;
      if (s.length === 1) {
        if (s === "0") o = 1;
        else {
          const d = parseInt(s, 10);
          if (!Number.isFinite(d)) return;
          o = d / 10;
        }
      } else {
        const n = Math.min(100, parseInt(s, 10));
        if (!Number.isFinite(n)) return;
        o = n / 100;
      }
      o = Math.max(BRUSH_OPACITY_MIN, Math.min(BRUSH_OPACITY_MAX, o));
      brushOpacityRef.current = o;
      setBrushOpacity(o);
      updateBrushPreview();
    };

    const undoStroke = () => {
      if (undoPastRef.current.length === 0) {
        showStatus("NOTHING TO UNDO", false);
        return;
      }
      redoFutureRef.current.push(cloneStrokes(strokesRef.current));
      strokesRef.current = undoPastRef.current.pop();
      updateBrushPreview();
    };

    const redoStroke = () => {
      if (redoFutureRef.current.length === 0) {
        showStatus("NOTHING TO REDO", false);
        return;
      }
      undoPastRef.current.push(cloneStrokes(strokesRef.current));
      strokesRef.current = redoFutureRef.current.pop();
      updateBrushPreview();
    };

    const bumpBrush = (delta) => {
      const next = Math.max(
        BRUSH_SIZE_MIN,
        Math.min(BRUSH_SIZE_MAX, brushSizeRef.current + delta),
      );
      brushSizeRef.current = next;
      setBrushSize(next);
      updateBrushPreview();
    };

    const onKeyDown = (e) => {
      if (e.defaultPrevented) return;
      if (isTypingInEditable(e.target)) return;

      const mod = e.metaKey || e.ctrlKey;
      const isZ = e.code === "KeyZ" || e.key === "z" || e.key === "Z";
      if (mod && isZ) {
        e.preventDefault();
        if (e.shiftKey) redoStroke();
        else undoStroke();
        return;
      }
      if (e.ctrlKey && !e.metaKey && (e.code === "KeyY" || e.key === "y" || e.key === "Y")) {
        e.preventDefault();
        redoStroke();
        return;
      }

      const step = e.shiftKey ? 5 : 1;
      if (
        e.code === "Minus" ||
        e.code === "NumpadSubtract" ||
        e.code === "BracketLeft"
      ) {
        e.preventDefault();
        bumpBrush(-step);
        return;
      }
      if (
        e.code === "NumpadAdd" ||
        e.code === "BracketRight" ||
        e.code === "Equal"
      ) {
        e.preventDefault();
        bumpBrush(step);
        return;
      }

      if (!mod && !e.altKey && /^[0-9]$/.test(e.key)) {
        e.preventDefault();
        if (opacityDigitBufferRef.current.length >= 3) return;
        opacityDigitBufferRef.current += e.key;
        if (opacityDigitTimerRef.current) {
          clearTimeout(opacityDigitTimerRef.current);
        }
        opacityDigitTimerRef.current = setTimeout(flushOpacityDigits, 420);
      }
    };

    window.addEventListener("keydown", onKeyDown, true);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      if (opacityDigitTimerRef.current) {
        clearTimeout(opacityDigitTimerRef.current);
      }
      opacityDigitTimerRef.current = null;
      opacityDigitBufferRef.current = "";
    };
  }, [updateBrushPreview, showStatus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const brushPreview = brushPreviewRef.current;
    if (!canvas || !brushPreview) return;

    const handleStart = (e) => {
      const currentLayer = layersRef.current.find(
        (l) => l.id === activeLayerIdRef.current,
      );
      if (!currentLayer || !currentLayer.visible) return;
      canvas.focus({ preventScroll: true });
      undoPastRef.current.push(cloneStrokes(strokesRef.current));
      if (undoPastRef.current.length > MAX_STROKE_UNDO) {
        undoPastRef.current.shift();
      }
      redoFutureRef.current = [];
      isDrawingRef.current = true;
      const pos = getPos(canvas, e, canvasSize, canvasSize);
      const stroke = {
        type: currentToolRef.current,
        points: [pos],
        color: paintColorRef.current,
        size: brushSizeRef.current,
        opacity: brushOpacityRef.current,
        seed: currentWordRef.current.seed,
        layerId: activeLayerIdRef.current,
        sprayOffsets: [],
      };
      if (stroke.type === "spray") {
        stroke.sprayOffsets.push(generateSprayPattern(brushSizeRef.current));
      }
      currentStrokeRef.current = stroke;
      strokesRef.current.push(stroke);
      if (e.cancelable) e.preventDefault();
    };

    const handleMove = (e) => {
      const pos = getPos(canvas, e, canvasSize, canvasSize);
      brushPreview.style.display = "block";
      brushPreview.style.left = `${pos.screenX}px`;
      brushPreview.style.top = `${pos.screenY}px`;
      brushPreview.style.transform = "translate(-50%, -50%)";
      if (!isDrawingRef.current) return;
      const stroke = currentStrokeRef.current;
      if (!stroke) return;
      const last = stroke.points[stroke.points.length - 1];
      if (Math.hypot(pos.x - last.x, pos.y - last.y) > 0.25) {
        stroke.points.push(pos);
        if (stroke.type === "spray") {
          stroke.sprayOffsets.push(generateSprayPattern(brushSizeRef.current));
        }
      }
      if (e.cancelable) e.preventDefault();
    };

    const handleEnd = () => {
      isDrawingRef.current = false;
      currentStrokeRef.current = null;
    };

    const onLeave = () => {
      brushPreview.style.display = "none";
    };
    const onEnter = () => {
      brushPreview.style.display = "block";
    };

    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    canvas.addEventListener("touchstart", handleStart);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mousedown", handleStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [canvasSize]);

  const saveArt = useCallback(async () => {
    const { db, appId } = firebaseRef.current || {};
    if (!userRef.current || !db) {
      showStatus("WAITING FOR AUTH OR NO FIREBASE...", true);
      return;
    }
    showStatus("SAVING...", false);
    try {
      await saveSeedArt({
        db,
        appId,
        seedId: currentWord.id,
        strokes: strokesRef.current,
        layers: layersRef.current,
      });
      showStatus(`SAVED: ${currentWord.text.toUpperCase()}`, false);
    } catch (e) {
      console.error(e);
      showStatus("SAVE FAILED", true);
    }
  }, [currentWord, showStatus]);

  const clearCanvas = useCallback(() => {
    if (confirm("Wipe ALL layers?")) {
      strokesRef.current = [];
      clearStrokeUndoStacks();
    }
  }, [clearStrokeUndoStacks]);

  const changeCanvasSize = useCallback((newSize) => {
    if (newSize === canvasSize) return;
    const px = newSize;
    if (!confirm(`Switch to ${px}×${px}? This will clear all strokes.`)) return;
    strokesRef.current = [];
    clearStrokeUndoStacks();
    setLayers([...DEFAULT_LAYERS]);
    setActiveLayerId(2);
    activeLayerIdRef.current = 2;
    // Scale brush size proportionally so strokes feel similar
    setBrushSize(
      Math.max(
        BRUSH_SIZE_MIN,
        Math.round(brushSizeRef.current * (newSize / canvasSize)),
      ),
    );
    setCanvasSize(newSize);
  }, [canvasSize, clearStrokeUndoStacks]);

  const exportPng = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `art-${currentWord.text}.png`;
    link.href = canvas.toDataURL();
    link.click();
  }, [currentWord.text]);

  const recordWiggle = useCallback(() => {
    if (isRecording) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsRecording(true);
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: canvasSize,
      height: canvasSize,
      workerScript: workerUrl,
    });
    let f = 0;
    const cap = () => {
      if (f < 12) {
        gif.addFrame(ctx, { copy: true, delay: 100 });
        f++;
        setTimeout(cap, 100);
      } else {
        gif.on("finished", (b) => {
          const url = URL.createObjectURL(b);
          const link = document.createElement("a");
          link.href = url;
          link.download = `wiggle-${currentWord.text}.gif`;
          link.click();
          setIsRecording(false);
        });
        gif.render();
      }
    };
    cap();
  }, [canvasSize, currentWord.text, isRecording]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      setPaintColor((c) => {
        if (next === "light" && c === "#FFFFFF") return "#000000";
        if (next === "dark" && c === "#000000") return "#FFFFFF";
        return c;
      });
      return next;
    });
  }, []);

  const addLayer = useCallback(() => {
    setLayers((prev) => {
      const nextId = Math.max(...prev.map((l) => l.id), 0) + 1;
      const newLayer = {
        id: nextId,
        name: `Layer ${nextId}`,
        visible: true,
        locked: false,
      };
      setActiveLayerId(nextId);
      activeLayerIdRef.current = nextId;
      return [...prev, newLayer];
    });
  }, []);

  const selectLayer = useCallback((id) => {
    setActiveLayerId(id);
    activeLayerIdRef.current = id;
  }, []);

  const toggleLayerVisible = useCallback((id) => {
    setLayers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, visible: !l.visible } : l)),
    );
  }, []);

  const deleteLayer = useCallback((id) => {
    setLayers((prev) => {
      if (prev.length <= 1) return prev;
      const layer = prev.find((l) => l.id === id);
      if (!layer) return prev;
      if (!confirm(`Delete ${layer.name}?`)) return prev;
      strokesRef.current = strokesRef.current.filter((s) => s.layerId !== id);
      const next = prev.filter((l) => l.id !== id);
      if (activeLayerIdRef.current === id) {
        const first = next[0]?.id ?? 1;
        setActiveLayerId(first);
        activeLayerIdRef.current = first;
      }
      return next;
    });
  }, []);

  const renameLayer = useCallback((id, name) => {
    setLayers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, name } : l)),
    );
  }, []);

  const selectWord = useCallback((word) => {
    setCurrentWord(word);
  }, []);

  const toggleWordChecked = useCallback((id, e) => {
    e?.stopPropagation?.();
    e?.preventDefault?.();
    setCheckedIds((prev) => {
      const set = new Set(prev);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      return [...set].sort((a, b) => a - b);
    });
  }, []);

  const letterCounts = useMemo(() => letterCountsFromWords(words), [words]);

  const filteredWords = useMemo(() => {
    const q = wordFilter.toLowerCase().trim();
    return words.filter((w) => {
      if (letterFilter && w.text.charAt(0).toLowerCase() !== letterFilter) {
        return false;
      }
      if (q && !w.text.includes(q)) return false;
      return true;
    });
  }, [words, wordFilter, letterFilter]);

  const checklistProgress = useMemo(
    () => ({ done: checkedIds.length, total: words.length }),
    [checkedIds.length, words.length],
  );

  return {
    theme,
    toggleTheme,
    canvasRef,
    canvasContainerRef,
    brushPreviewRef,
    currentTool,
    setCurrentTool,
    paintColor,
    setPaintColor,
    brushSize,
    setBrushSize,
    brushOpacity,
    setBrushOpacity,
    layers,
    activeLayerId,
    addLayer,
    selectLayer,
    toggleLayerVisible,
    deleteLayer,
    renameLayer,
    wordFilter,
    setWordFilter,
    letterFilter,
    setLetterFilter,
    letterCounts,
    filteredWords,
    currentWord,
    selectWord,
    checkedIds,
    toggleWordChecked,
    checklistProgress,
    status,
    isRecording,
    saveArt,
    clearCanvas,
    exportPng,
    recordWiggle,
    updateBrushPreview,
    canvasSize,
    changeCanvasSize,
    rightDrawerWidth,
    setRightDrawerWidth,
  };
}
