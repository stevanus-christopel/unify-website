### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import BottomSheet from 'unify-react-mobile/build/BottomSheet'` on top of your code.
3. Code your `<BottomSheet />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<BottomSheet />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| title   | Props for bottom sheets title   | string            | **""**
| subTitle  | Props for bottom sheets subTitle  | string            | **""**
| full   | Props for making full bottom sheet   | bool            | **false**, true
| onClose   | Props for adding function to close the bottom sheet (toggle display state)   | func            | -
| display   | Props to display the bottom sheet   | bool            | **false**, true
| children   | Props for give bottom sheet content   | object            | -
| noPadding        | Props to set bottom sheets padding to zero     | bool             | **false**, true
| padding          | Props to set bottom sheets padding    | string            | ""
| actionText       | Props for bottom sheets action text  | string         | ""
| onActionClick    | Props for adding function to action text | func         | -
