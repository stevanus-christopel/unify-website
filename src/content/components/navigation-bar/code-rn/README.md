### Usage

1. Install **unify-react-native** by running `yarn add unify-react-native` or `npm install unify-react-native` on your project.
2. Use `import { NavBar } from 'unify-react-native'` on top of your code.
3. Code your `<NavBar />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<NavBar />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| title   | Props to set title of navigation bar   | string            | **""**
| subTitle   | Props to set subtitle of navigation bar   | string            | **""**
| hideTitle   | Props to hide title of navigation bar   | bool            | **false**, true
| hideSubTitle   | Props to hide subtitle of navigation bar   | bool            | **false**, true
| inverted   | Props to set green (false) or white (true) as background for navigation bar   | bool            | **false**, true
| onBack  | Props for adding back function or url to button   | func or string           | -
| fixed   | Props to set navigation bar position as fixed   | bool            | **false**, true
| children   | Props to give action or icon on the right side   | string or object            | -
