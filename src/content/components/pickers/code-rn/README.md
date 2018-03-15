### Usage

1. Install **unify-react-native** by running `yarn add unify-react-native` or `npm install unify-react-native` on your project.
2. Use `import { Picker } from 'unify-react-native'` on top of your code.
3. Code your `<Picker />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Picker />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| title   | Props for set bottom sheets title   | string            | **""**
| full   | Props for making full bottom sheet   | bool            | **false**, true
| onClose   | Props for adding function to close the bottom sheet (toggle display state)   | func            | -
| display   | Props to display the bottom sheet   | bool            | **false**, true
| firstDate | Props to set first date selected           | object          | -
| secondDate | Props to set second date selected         | object          | -
| infoDate | Props to set custom marked date on bottom   | array           | **[]**
| onPress   | Props to adding function to set first date value    | func         | -
| onPressDouble   | Props to adding function to set second date value   | func    | -
