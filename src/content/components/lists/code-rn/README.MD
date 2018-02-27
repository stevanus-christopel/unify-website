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
| items            | Props for list content              | array           | **[]**
| item.text       | Props for item text value          | string            | -
| item.icon       | Props for item icon url            | string            | -
| item.actionText | Props for item actionText value    | string            | -
| item.arrow      | Props for showing arrow icon       | bool              | -
| item.onPress    | Props for item press function       | func             | -