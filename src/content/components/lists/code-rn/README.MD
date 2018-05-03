### Usage

1. Install **unify-react-native** by running `yarn add unify-react-native` or `npm install unify-react-native` on your project.
2. Use `import { List } from 'unify-react-native'` on top of your code.
3. Code your `<List />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<List />` component. The bold one in Value section is the default value.<br />
Props **item** below is the element of props **items**

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| subheader        | Props for subheader text            | string          | ""
| noMargin         | Props for removing margin           | bool            | **false**, true
| items   | Props to set items inside tabs. Use same format as the sample above.  | array | **[]**
| item.key  | Props for key of each element inside items array | number | **0**
| item.checked  | Props for set the item to be checked | bool | **false**, true
| item.text  | Props for text of each element inside items array  | string  | -
| item.icon  | Props for item icon, can be string file location or child component.<br />Use **require** for local assets and **uri** for network assets  | string or object  | -
| item.actionText | Props for adding action text of each element inside items array   | string  | -
| item.actionType | Props for setting the type of action inside items array   | string  | checkbox, radio, toggle
| item.arrow  | Props for showing arrow icon  | bool | -
| item.onClick  | Props for adding click function of each element inside items array  | func | -
