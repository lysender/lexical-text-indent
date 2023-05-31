import type {Klass, LexicalNode} from 'lexical';
import {AutoLinkNode, LinkNode} from '@lexical/link';
import {ListItemNode, ListNode} from '@lexical/list';
import {OverflowNode} from '@lexical/overflow';
import {HeadingNode, QuoteNode} from '@lexical/rich-text';

const PlaygroundNodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  AutoLinkNode,
  LinkNode,
  OverflowNode,
];

export default PlaygroundNodes;
