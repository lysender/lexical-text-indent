import EditorContainer from "./text-editor";

function App() {
  return (
    <>
      <div className={'card'}>
        <EditorContainer readonly={false} content={null} />
      </div>
    </>
  )
}

export default App
