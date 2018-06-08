### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import NavBar from 'unify-react-mobile/build/NavBar'` on top of your code.
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
| transparent   | Props to set navbar background to transparent   | bool        | **false**, true
| step          | Props to indicate active index of step      | number          | -
| numberOfStep     | Props to set total number of steps   | number          | -
| onBack  | Props for adding back function or url to button   | func or string           | -
| fixed   | Props to set navigation bar position as fixed   | bool            | **false**, true
| shadow   | Props to set whether box-shadow should be shown or not   | bool            | **true**, false
| children   | Props to give action or icon on the right side   | string or object            | -
