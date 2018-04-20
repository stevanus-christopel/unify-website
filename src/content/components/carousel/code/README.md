### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { Carousel } from 'unify-react-mobile'` on top of your code.
3. Code your `<Carousel />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Carousel />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className        | Props for applying custom classes   | string          | **""**
| indicator        | Props for show/hide indicators      | bool            | **true**, false
| infinite         | Props for infinite slides           | bool            | **false**, true
| autoplay         | Props for autoplay slides           | bool            | **false**, true
| link    | Props for adding custom link on right bottom text  | string    | -
| linkText    | Props for adding text on right bottom    | string          | -
| onChange    | Props for adding change function when moving slides        | func          | -
| children        | Props for give carousel content      | array           | **[]**
