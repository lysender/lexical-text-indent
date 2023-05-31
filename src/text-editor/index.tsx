import {EditorState} from 'lexical';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";
import {SharedHistoryContext} from './context/SharedHistoryContext';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import PlaygroundNodes from "./nodes/PlaygroundNodes.ts";
import Editor from './Editor.tsx';

type Props = {
  readonly: boolean;
  content: string|null;
  onChange?: (content: string|null) => void;
};

function EditorContainer(props: Props) {
  const initialConfig = {
    editorState: props.content,
    namespace: 'Playground',
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
    editable: !props.readonly,
  };

  const handleOnChange = (editorState: EditorState) => {
    if (props.onChange) {
      props.onChange(JSON.stringify(editorState));
    }
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <div className={`editor-container`}>
          <div className={`editor-shell`}>
            <Editor readonly={props.readonly} />
          </div>
        </div>
        <OnChangePlugin onChange={handleOnChange} />
      </SharedHistoryContext>
    </LexicalComposer>
  );
}

export default EditorContainer;
