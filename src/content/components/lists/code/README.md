### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { List } from 'unify-react-mobile'` on top of your code.
3. Code your `<List />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<List />` component. The bold one in Value section is the default value.<br />
Props **item** below is the element of props **items**

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className        | Props for applying custom classes   | string          | **""**
| subheader        | Props for subheader text            | string          | ""
| noMargin         | Props for removing margin           | bool            | **false**, true
| items   | Props to set items inside tabs. Use same format as the sample above.  | array | **[]**
| item.key  | Props for key of each element inside items array | number | **0**
| item.checked  | Props for setting is the item checked | bool | **false**, true
| item.text  | Props for text of each element inside items array  | string  | -
| item.icon  | Props for item icon, can be string file location or child component  | string or object  | -
| item.actionText | Props for adding action text of each element inside items array   | string  | -
| item.actionType | Props for set the type of action inside items array   | string  | checkbox, radio, toggle
| item.arrow  | Props for showing arrow icon  | bool | -
| item.onClick  | Props for adding click function of each element inside items array  | func | -
