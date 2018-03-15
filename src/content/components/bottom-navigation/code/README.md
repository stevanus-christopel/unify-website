### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { BottomNav } from 'unify-react-mobile'` on top of your code.
3. Code your `<BottomNav />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<BottomNav />` component. The bold one in Value section is the default value.<br />
Props **item** below is the element of **items** array.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| indexActive   | Props for set which item is active based on array index number   | number            | **0**
| items   | Props to set items inside bottom nav. Use same format as the sample above.   | array            | **[]**
| item.key   | Props for key of each element inside items array.   | number            | 0
| item.icon   | Props for non-active icon, can be string file location or child component  | string or object            | -
| item.iconActive   | Props for active icon, can be string file location or child component  | string or object            | -
| item.text   | Props for text of each element inside items array.   | string            | ""
| item.onClick   | Props for adding click function of each element inside items array.   | func            | -
| item.count   | Props for notification count of each element inside items array.  | number            | -
