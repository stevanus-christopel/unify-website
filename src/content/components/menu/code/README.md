### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { Menu } from 'unify-react-mobile'` on top of your code.
3. Code your `<Menu />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Menu />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| display   | Props for defining whether the menu displayed or not   | bool            | **false**, true
| items   | Props to set items inside menu. Use same format as the sample above.   | array            | **[]**
| actionText   | Props to set text for menu's action   | bool            | **""**
| onAction   | Props for adding click function to menu's action   | func            | -
| onClose   | Props for triggering function when menu's closed   | func            | -
