# Lexical Text Indent Bug Demo

Bug: Theme `PlaygroundEditorTheme__indent` value doesn't get used when rendering editor state with indents to another editor.

Use case: Rendering contents from database to the editor where the content has indention.

Tried to override the indent value from `40px` to `20px`

```css
.PlaygroundEditorTheme__indent {
  --lexical-indent-base-value: 20px;
}
```

Versions

- Node: 18.16.0
- Lexical: 0.11.1
- @lexical/react: 0.11.1
- react: 18.2.0

## How to

Type in some text with at least 2 levels of indention, ex:

```text
sample text
    level 1
    level 1
        level 2
        level 2

another text
```

