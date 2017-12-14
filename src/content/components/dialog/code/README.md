### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { Dialog } from 'unify-react-mobile'` on top of your code.
3. Code your `<Dialog />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Dialog />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| title   | Props to set title for dialog   | bool            | **""**
| longAction   | Props for making long action dialog styles   | bool            | **false**, true
| actionPrimaryText   | Props to set text for dialog's primary action   | bool            | **""**
| onActionPrimaryClick   | Props for adding click function to dialog's primary action   | func            | -
| actionSecondaryText   | Props to set text for dialog's secondary action   | bool            | **""**
| onActionSecondaryClick   | Props for adding click function to dialog's secondary action   | func            | -
| children   | Props to give dialog description   | string            | **""**
