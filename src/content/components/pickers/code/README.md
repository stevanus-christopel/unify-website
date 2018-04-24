### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import Picker from 'unify-react-mobile/build/Picker'` on top of your code.
3. Code your `<Picker />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Picker />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| title   | Props for set bottom sheets title   | string            | **""**
| full   | Props for making full bottom sheet   | bool            | **false**, true
| onClose   | Props for adding function to close the bottom sheet (toggle display state)   | func            | -
| display   | Props to display the bottom sheet   | bool            | **false**, true
| firstDate | Props to set first date selected           | object          | -
| secondDate | Props to set second date selected         | object          | -
| infoDate | Props to set custom marked date on bottom   | array           | **[]**
| onClick   | Props to adding function to set first date value    | func         | -
| onClickDouble   | Props to adding function to set second date value   | func    | -
