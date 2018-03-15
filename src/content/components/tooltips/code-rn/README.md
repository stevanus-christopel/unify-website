### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { Tooltip } from 'unify-react-mobile'` on top of your code.
3. Code your `<Tooltip />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Tooltip />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| title   | Props for set tooltip title   | string            | **""**
| actionText   | Props for set action text to tooltip   | string            | **""**
| onActionPress   | Props for set press function to action text on tooltip   | func            | -
| image   | Props for adding icon to tooltip   | string            | -, image object
| onClose   | Props for adding function to close the tooltip (toggle display state)   | func            | -
| display   | Props to display the tooltip   | bool            | **false**, true
| children   | Props for give tooltip text   | string            | **""**
