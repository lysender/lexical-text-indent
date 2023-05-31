import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { useSharedHistoryContext } from './context/SharedHistoryContext';
import ContentEditable from './ui/ContentEditable';
import Placeholder from './ui/Placeholder';

type Props = {
  readonly: boolean;
};

function Editor(props: Props) {
  const {historyState} = useSharedHistoryContext();
  const placeholder = <Placeholder>Enter text...</Placeholder>;

  return (
    <>
      <div className={`editor-container ${!props.readonly ? 'editor-container-edit' : ''}`}>
        <HistoryPlugin externalHistoryState={historyState} />
        <RichTextPlugin
          contentEditable={
            <div className={`editor-scroller ${props.readonly ? 'editor-scroller-readonly' : ''}`}>
              <div className="tlx-ctf-inner editor">
                <ContentEditable />
              </div>
            </div>
          }
          placeholder={!props.readonly ? placeholder : null}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <TabIndentationPlugin />
      </div>
    </>
  );
}

export default Editor;
