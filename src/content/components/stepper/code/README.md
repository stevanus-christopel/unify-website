### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { NavBar } from 'unify-react-mobile'` on top of your code.
3. Code your `<NavBar />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<NavBar />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| title   | Props to set title of stepper   | string            | **""**
| subTitle   | Props to set subtitle of stepper   | string            | **""**
| hideTitle   | Props to hide title of stepper   | bool            | **false**, true
| hideSubTitle   | Props to hide subtitle of stepper   | bool            | **false**, true
| inverted   | Props to set green (false) or white (true) as background for stepper   | bool            | **false**, true
| onBack  | Props for adding back function or url to button   | func or string           | -
| fixed   | Props to set stepper position as fixed   | bool            | **false**, true
| step   | Props to set current step of stepper   | number            | -
| numberOfStep   | Props to set total step of stepper   | number            | -
