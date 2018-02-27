### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { Chip } from 'unify-react-mobile'` on top of your code.
3. Code your `<Chip />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Chip />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className        | Props for applying custom classes   | string          | **""**
| active           | Props for mark chips selected       | bool            | **false**, true
| onClick     | Props for adding click function to chips | func            | -
| onClose     | Props for adding close function to chips | func            | -
| children         | Props for give chips text           | string          | **""**