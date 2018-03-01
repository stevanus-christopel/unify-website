### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { TextField } from 'unify-react-mobile'` on top of your code.
3. Code your `<TextField />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<TextField />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className        | Props for applying custom classes   | string          | **""**
| type        | Props for setting the type of text field            | string          | **"text"**
| id     | Props for giving an id to text field     | string            | **""**
| name     | Props for giving a name to text field     | string            | **""**
| value     | Props for giving a value to text field     | string            | **""**
| placeholder     | Props for giving a placeholder to text field     | string            | **""**
| maxLength     | Props for setting the maximum length of text field     | number            | -
| counter     | Props for display length counter of text field     | number            | -
| label     | Props for giving a label to text field     | string            | **""**
| message     | Props for giving an info message below text field     | string            | **""**
| error     | Props for giving error state to text field     | string            | **""**
| disabled     | Props for applying disabled style     | bool            | **false**, true
| readonly     | Props for applying read only style     | bool            | **false**, true
| onClick   | Props for adding click function to text field   | func            | -
| onFocus   | Props for adding focus handler function to text field   | func            | -
| onBlur   | Props for adding blur handler function to text field   | func            | -
| onKeyDown   | Props for adding key down function to text field   | func            | -
| onInput   | Props for adding input handler function to text field   | func            | -
| onChange   | Props for adding change handler function to text field   | func            | -
