### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import Checkbox from 'unify-react-mobile/build/Checkbox'` on top of your code.
3. Use `import Radio from 'unify-react-mobile/build/Radio'` on top of your code.
4. Use `import Toggle from 'unify-react-mobile/build/Toggle'` on top of your code.
5. Code your `<Checkbox />` or `<Radio />` or `<Toggle />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Button />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| id               | Props for applying custom id        | string          | **""**
| name             | Props for applying custom name      | string            | **""**
| value           | Props for component's value          | string            | **""**
| useLabel        | Props for click control area     | bool            | **false**, true
| checked      | Props for toggling input active state   | bool            | **false**, true
| disabled  | Props for making disabled selection component types   | bool    | **false**, true
| onClick   | Props for adding click function to selection component   | func    | -
| onChange   | Props for adding change function to selection componen   | func    | -
| appendText  | Props for adding text after component (only for Toggle)   | string          | **""**
| prependText  | Props for adding text before component (only for Toggle)  | string          | **""** 
