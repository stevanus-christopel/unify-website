### Usage

1. Install **unify-react-native** by running `yarn add unify-react-mobile` or `npm install unify-react-native` on your project.
2. Use `import { Dialog } from 'unify-react-native'` on top of your code.
3. Code your `<Dialog />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Dialog />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| title   | Props to set title for dialog   | string            | **""**
| longAction   | Props for making long action dialog styles   | bool            | **false**, true
| actionPrimaryText   | Props to set text for dialog's primary action   | string            | **""**
| onActionPrimaryPress  | Props for adding press function to dialog's primary action   | func            | -
| actionSecondaryText   | Props to set text for dialog's secondary action   | string            | **""**
| onActionSecondaryPress  | Props for adding press function to dialog's secondary action   | func            | -
| onClose   | Props for adding function to close the dialog (toggle display state)   | func            | -
| display   | Props to display the dialog   | bool            | **false**, true
| children   | Props to give dialog description   | string            | **""**