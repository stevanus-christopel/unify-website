### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { Button, Menu, Tab } from 'unify-react-mobile'` on top of your code.
3. Code your `<Button />` component based on your requirement with modifiers & props below.



### Styles

#### Modifiers

Use these modifiers with `.btn--{modifier}` class.

| Selector            | Description                                   |
|---------------------|-----------------------------------------------|
| .btn--primary   | Selector for applying primary button styles   |
| .btn--secondary | Selector for applying secondary button styles |
| .btn--small    | Selector for applying small button styles    |
| .btn--medium        | Selector for applying medium button styles     |
| .btn--large        | Selector for applying large button styles     |
| .btn--block        | Selector for applying block button styles     |

#### Props

Use these props on each `<Button />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying style based on modifiers section above   | string            | **"btn--secondary btn--medium"**
| floating   | Props for making floating button styles   | bool            | **false**, true
| disabled   | Props for making disabled button styles   | string            | -, disabled
| image   | Props for adding icon to button   | string            | -, image object
| onClick   | Props for adding click function to button   | func            | -
| children   | Props for give button text   | string            | **""**