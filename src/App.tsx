import EditorContainer from "./text-editor";
import { useState } from "react";

function App() {
  const [editorState, setEditorState] = useState<string|null>(null);
  const [viewerState, setViewerState] = useState<string|null>(null);

  const handleOnChange = (content: string | null) => {
    setEditorState(content);
  }

  const handleRenderViewer = () => {
    setViewerState(editorState);
  }

  return (
    <>
      <div>
        <h1>Editor</h1>
        <div className={'card'}>
          <EditorContainer readonly={false} content={null} onChange={handleOnChange} />
        </div>
      </div>
      <div>
        <button onClick={handleRenderViewer}>Render in viewer</button>
      </div>
      {viewerState && (
        <div>
          <div>
            <h1>Another editor</h1>
            <div className={'card'}>
              <EditorContainer readonly={false} content={viewerState} />
            </div>
          </div>
          <div>
            <h1>Viewer</h1>
            <div className={'card'}>
              <EditorContainer readonly={true} content={viewerState} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
