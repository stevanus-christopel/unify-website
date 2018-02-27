### Usage

1. Install **unify-react-native** by running `yarn add unify-react-native` or `npm install unify-react-native` on your project.
2. Use `import { Chip } from 'unify-react-native'` on top of your code.
3. Code your `<Chip />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Chip />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| active           | Props for mark chips selected       | bool            | **false**, true
| onPress     | Props for adding press function to chips | func            | -
| onClose     | Props for adding close function to chips | func            | -
| children         | Props for give chips text           | string          | **""**