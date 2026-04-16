import { SunIcon } from "./icons/ToolIcons.jsx";

export function StudioHeader({
  onToggleTheme,
  onClear,
  onSaveCloud,
  onRecord,
  onDownloadPng,
}) {
  return (
    <header className="border-b-theme z-10 flex items-center justify-between bg-theme-primary p-4">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold uppercase tracking-tight">
          Super Serious Art Studio{" "}
          <span className="text-sm opacity-50">PRO BITMAP</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onToggleTheme}
          className="border-theme bg-white p-2 text-black transition-colors hover:bg-zinc-100"
          aria-label="Toggle theme"
        >
          <SunIcon />
        </button>
        <div className="mx-2 h-8 w-px bg-black/20" />
        <button
          type="button"
          onClick={onClear}
          className="border-theme bg-white px-4 py-1 uppercase transition-all hover:invert"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={onSaveCloud}
          className="border-theme bg-accent px-4 py-1 font-bold uppercase text-white transition-all hover:opacity-80"
        >
          Save Art
        </button>
        <button
          type="button"
          onClick={onRecord}
          className="flex items-center gap-2 border-theme bg-red-600 px-4 py-1 font-bold uppercase text-white transition-colors hover:bg-red-700"
        >
          <span className="h-2 w-2 animate-ping rounded-full bg-white" />
          Record Wiggle
        </button>
        <button
          type="button"
          onClick={onDownloadPng}
          className="border-theme bg-black px-4 py-1 font-bold uppercase text-white transition-all hover:invert"
        >
          Export PNG
        </button>
      </div>
    </header>
  );
}
