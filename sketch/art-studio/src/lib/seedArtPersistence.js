import { doc, getDoc, setDoc } from "firebase/firestore";

export async function saveSeedArt({ db, appId, seedId, strokes, layers }) {
  const docRef = doc(
    db,
    "artifacts",
    appId,
    "public",
    "data",
    "seedArt",
    String(seedId),
  );
  await setDoc(docRef, {
    strokes: JSON.stringify(strokes),
    layers: JSON.stringify(layers),
    updatedAt: Date.now(),
  });
}

export async function loadSeedArt({ db, appId, seedId }) {
  const docRef = doc(
    db,
    "artifacts",
    appId,
    "public",
    "data",
    "seedArt",
    String(seedId),
  );
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    strokes: JSON.parse(data.strokes),
    layers: JSON.parse(data.layers),
  };
}
