### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import Ticker from 'unify-react-mobile/build/Ticker'` on top of your code.
3. Code your `<Ticker />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Ticker />` component. The bold one in Value section is the default value.<br />
Props **item** below is the element of **items** array.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| warning   | Props for making warning ticker styles   | bool            | **false**, true
| indexActive   | Props for set which item is active based on array index number   | number            | **0**
| onClose       | Props for adding function to close the ticker     | func        | -
| items   | Props to set items inside ticker. Use same format as the sample above.   | array            | **[]**
| item.text   | Props for text of each element inside items array.   | string            | ""
| item.action   | Props for action text of each element inside items array.   | string            | ""
| item.actionLink   | Props for set url (href) of action text.   | string            | ""
