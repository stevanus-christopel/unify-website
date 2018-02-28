### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-native` or `npm install unify-react-native` on your project.
2. Use `import { Button } from 'unify-react-native'` on top of your code.
3. Code your `<Button />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Button />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| type   | Props for setting type of button   | string            | **button**, submit
| transaction   | Props for making transaction button styles   | bool            | **false**, true
| primary   | Props for making primary button styles   | bool            | **false**, true
| secondary   | Props for making secondary button styles   | bool            | **false**, true
| disabled   | Props for making disabled button styles   | bool            | **false**, true
| large   | Props for making large button styles   | bool            | **false**, true
| medium   | Props for making medium button styles   | bool            | **false**, true
| small   | Props for making small button styles   | bool            | **false**, true
| floating   | Props for making floating button styles   | bool            | **false**, true
| block   | Props for making block button styles   | bool            | **false**, true
| image   | Props for adding icon to button   | string            | **""**, url
| loading   | Props for display loading state of button   | bool            | **false**, true
| onPress   | Props for adding press function to button   | func            | -
| children   | Props for give button text   | string            | **""**
