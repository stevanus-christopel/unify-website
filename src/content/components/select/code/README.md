### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import Select from 'unify-react-mobile/build/Select'` on top of your code.
3. Code your `<Select />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Select />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className        | Props for applying custom classes   | string          | **""**
| id     | Props for giving an id to select     | string            | **""**
| name     | Props for giving a name to select     | string            | **""**
| selectedOption   | Props for selected value / default value   | string   | **""**
| label     | Props for giving a label to select     | string            | **""**
| message     | Props for giving an info message below select     | string            | **""**
| info     | Props for giving an info message below select     | string            | **""**
| error     | Props for giving error state to select     | bool            | **false**, true
| success     | Props for giving success state to select    | bool            | **false**, true
| disabled     | Props for applying disabled style     | bool            | **false**, true
| onFocus   | Props for adding focus handler function to select   | func            | -
| onBlur   | Props for adding blur handler function to select   | func            | -
| onChange   | Props for adding change handler function to select   | func            | -
| children  | Props for giving select options           | arrayOf(object)       | -