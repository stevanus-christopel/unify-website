### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import TextArea from 'unify-react-mobile/build/TextArea'` on top of your code.
3. Code your `<TextArea />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<TextArea />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className        | Props for applying custom classes   | string          | **""**
| id     | Props for giving an id to text area     | string            | **""**
| name     | Props for giving a name to text area     | string            | **""**
| value     | Props for giving a value to text area     | string            | **""**
| placeholder     | Props for giving a placeholder to text area     | string            | **""**
| maxLength     | Props for setting the maximum length of text area     | number            | -
| counter     | Props for display length counter of text area     | number            | -
| label     | Props for giving a label to text area     | string            | **""**
| message     | Props for giving an info message below text area     | string            | **""**
| info     | Props for giving an info message below text area     | string            | **""**
| error     | Props for giving error state to text area     | bool            | **false**, true
| success     | Props for giving success state to text area    | bool            | **false**, true
| disabled     | Props for applying disabled style     | bool            | **false**, true
| readonly     | Props for applying read only style     | bool            | **false**, true
| onClick   | Props for adding click function to text area   | func            | -
| onFocus   | Props for adding focus handler function to text area   | func            | -
| onBlur   | Props for adding blur handler function to text area   | func            | -
| onKeyDown   | Props for adding key down function to text area   | func            | -
| onInput   | Props for adding input handler function to text area   | func            | -
| onChange   | Props for adding change handler function to text area   | func            | -
