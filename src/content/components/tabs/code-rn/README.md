### Usage

1. Install **unify-react-native** by running `yarn add unify-react-native` or `npm install unify-react-native` on your project.
2. Use `import { Tab } from 'unify-react-native'` on top of your code.
3. Code your `<Tab />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Tab />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| primary   | Props for making primary tabs styles   | bool            | **false**, true
| secondary   | Props for making secondary tabs styles   | bool            | **false**, true
| indexActive   | Props for set which item is active based on array index number   | number            | **0**
| onItemPress   | Props for handling press function on item   | func            | -
| index     | Props for TabContent component to determine which tab header it belongs to.<br />(Use this only if there's a Tab without child.)   
| items   | Props to set items inside tabs. Use same format as the sample above.   | array            | **[]**
| item.key   | Props for key of each element inside items array.   | number            | 0
| item.text   | Props for text of each element inside items array.   | string            | ""
| item.value   | Props for value of each element inside items array.<br />Usually will be used in onItemClick function   | string or number or object            | -
| item.count   | Props for notification count of each element inside items array.<br />Only applicable on secondary tab.   | number            | -
