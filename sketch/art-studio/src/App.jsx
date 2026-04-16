import { useArtStudio } from "./hooks/useArtStudio.js";
import { CanvasStage } from "./components/CanvasStage.jsx";
import { SidePanel } from "./components/SidePanel.jsx";
import { StudioHeader } from "./components/StudioHeader.jsx";
import { ToolRail } from "./components/ToolRail.jsx";

export default function App() {
  const studio = useArtStudio();

  return (
    <div className="flex h-screen flex-col" data-theme={studio.theme}>
      <StudioHeader
        onToggleTheme={studio.toggleTheme}
        onClear={studio.clearCanvas}
        onSaveCloud={studio.saveArt}
        onRecord={studio.recordWiggle}
        onDownloadPng={studio.exportPng}
      />
      <main className="flex flex-1 overflow-hidden">
        <ToolRail
          currentTool={studio.currentTool}
          onToolChange={(id) => {
            studio.setCurrentTool(id);
            studio.updateBrushPreview();
          }}
          brushSize={studio.brushSize}
          onBrushSizeChange={(n) => {
            studio.setBrushSize(n);
            studio.updateBrushPreview();
          }}
          brushOpacity={studio.brushOpacity}
          onBrushOpacityChange={(n) => {
            studio.setBrushOpacity(n);
            studio.updateBrushPreview();
          }}
          layers={studio.layers}
          activeLayerId={studio.activeLayerId}
          onSelectLayer={studio.selectLayer}
          onToggleLayerVisible={studio.toggleLayerVisible}
          onDeleteLayer={studio.deleteLayer}
          onRenameLayer={studio.renameLayer}
          onAddLayer={studio.addLayer}
          canvasSize={studio.canvasSize}
        />
        <CanvasStage
          canvasRef={studio.canvasRef}
          containerRef={studio.canvasContainerRef}
          brushPreviewRef={studio.brushPreviewRef}
          isRecording={studio.isRecording}
          status={studio.status}
          canvasSize={studio.canvasSize}
          onChangeCanvasSize={studio.changeCanvasSize}
          paintColor={studio.paintColor}
          onPaintColorChange={studio.setPaintColor}
        />
        <SidePanel
          drawerWidth={studio.rightDrawerWidth}
          onDrawerWidthChange={studio.setRightDrawerWidth}
          wordFilter={studio.wordFilter}
          onWordFilterChange={studio.setWordFilter}
          letterFilter={studio.letterFilter}
          onLetterFilterChange={studio.setLetterFilter}
          letterCounts={studio.letterCounts}
          filteredWords={studio.filteredWords}
          currentWord={studio.currentWord}
          onSelectWord={studio.selectWord}
          checkedIds={studio.checkedIds}
          onToggleWordChecked={studio.toggleWordChecked}
          checklistProgress={studio.checklistProgress}
        />
      </main>
    </div>
  );
}
