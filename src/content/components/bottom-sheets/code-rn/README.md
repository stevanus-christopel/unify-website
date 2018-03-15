### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-native` or `npm install unify-react-native` on your project.
2. Use `import { BottomSheet } from 'unify-react-native'` on top of your code.
3. Code your `<BottomSheet />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<BottomSheet />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| title   | Props for set bottom sheets title   | string            | **""**
| full   | Props for making full bottom sheet   | bool            | **false**, true
| onClose   | Props for adding function to close the bottom sheet (toggle display state)   | func            | -
| display   | Props to display the bottom sheet   | bool            | **false**, true
| children   | Props for give bottom sheet content   | object            | -
