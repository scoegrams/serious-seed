export function LayerStrip({
  layers,
  activeLayerId,
  onSelectLayer,
  onToggleVisible,
  onDeleteLayer,
  onRenameLayer,
  onAddLayer,
  horizontal = false,
}) {
  const reversed = [...layers].reverse();

  if (horizontal) {
    return (
      <div className="flex items-center gap-1 px-1">
        <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 shrink-0">Ly</span>
        {reversed.map((layer) => {
          const active = activeLayerId === layer.id;
          const canDelete = layers.length > 1;
          return (
            <div
              key={layer.id}
              className={`layer-chip flex items-stretch ${active ? "layer-chip--active" : ""}`}
            >
              <button
                type="button"
                title={`${layer.name} — click to select, dbl-click rename`}
                onClick={() => onSelectLayer(layer.id)}
                onDoubleClick={(e) => {
                  e.preventDefault();
                  const next = prompt("Layer name:", layer.name);
                  if (next?.trim()) onRenameLayer(layer.id, next.trim());
                }}
                className="layer-chip-sel"
              >
                {layer.name.length > 5 ? layer.name.slice(0, 5) + "…" : layer.name}
              </button>
              <button
                type="button"
                className="layer-chip-aux"
                title={layer.visible ? "Hide layer" : "Show layer"}
                onClick={(e) => { e.stopPropagation(); onToggleVisible(layer.id); }}
              >
                {layer.visible ? "👁" : "—"}
              </button>
              {canDelete && (
                <button
                  type="button"
                  className="layer-chip-aux layer-chip-del"
                  title="Delete layer"
                  onClick={(e) => { e.stopPropagation(); onDeleteLayer(layer.id); }}
                >
                  ×
                </button>
              )}
            </div>
          );
        })}
        <button
          type="button"
          onClick={onAddLayer}
          className="tool-btn flex h-7 w-7 items-center justify-center text-xs font-bold shrink-0"
          title="New layer"
        >
          +
        </button>
      </div>
    );
  }

  // Vertical (docked) layout
  return (
    <div className="flex flex-col items-center gap-1 w-full px-1">
      <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">Layers</span>
      {reversed.map((layer) => {
        const active = activeLayerId === layer.id;
        const canDelete = layers.length > 1;
        return (
          <div
            key={layer.id}
            className={`layer-chip layer-chip-v flex items-stretch w-full ${active ? "layer-chip--active" : ""}`}
          >
            <button
              type="button"
              title={`${layer.name} — click to select, dbl-click rename`}
              onClick={() => onSelectLayer(layer.id)}
              onDoubleClick={(e) => {
                e.preventDefault();
                const next = prompt("Layer name:", layer.name);
                if (next?.trim()) onRenameLayer(layer.id, next.trim());
              }}
              className="layer-chip-sel flex-1 text-left truncate"
            >
              {layer.name}
            </button>
            <button
              type="button"
              className="layer-chip-aux"
              title={layer.visible ? "Hide layer" : "Show layer"}
              onClick={(e) => { e.stopPropagation(); onToggleVisible(layer.id); }}
            >
              {layer.visible ? "👁" : "—"}
            </button>
            {canDelete && (
              <button
                type="button"
                className="layer-chip-aux layer-chip-del"
                title="Delete layer"
                onClick={(e) => { e.stopPropagation(); onDeleteLayer(layer.id); }}
              >
                ×
              </button>
            )}
          </div>
        );
      })}
      <button
        type="button"
        onClick={onAddLayer}
        className="tool-btn flex h-6 w-full items-center justify-center text-xs font-bold"
        title="New layer"
      >
        + Layer
      </button>
    </div>
  );
}
