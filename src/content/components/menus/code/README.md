### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import Menu from 'unify-react-mobile/build/Menu'` on top of your code.
3. Code your `<Menu />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Menu />` component. The bold one in Value section is the default value.<br />
Props **item** below is the element of **items** array.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| actionText   | Props to set text for menu's action   | string            | **""**
| onAction   | Props for adding click function to menu's action   | func            | -
| onClose   | Props for adding function to close the menu (toggle display state)   | func            | -
| display   | Props to display the menu   | bool            | **false**, true
| children   | Props to give customized content above menu items (list) | string            | **""**
| items   | Props to set items inside menu. Use same format as the sample above.   | array            | **[]**
| item.key   | Props for key of each element inside items array.   | number            | 0
| item.checked  | Props for set the item to be checked | bool | **false**, true
| item.icon   | Props for icon, can be string file location or child component  | string or object            | -
| item.text   | Props for text of each element inside items array.   | string            | ""
| item.onClick   | Props for adding click function of each element inside items array.   | func            | -
