### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import Slider from 'unify-react-mobile/build/Slider'` on top of your code.
3. Code your `<Slider />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Slider />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className        | Props for applying custom classes   | string          | **""**
| min              | Props for slider minimal value      | number          | **0**
| max              | Props for slider maximal value      | number          | **100**
| value            | Props for slider first value        | number          | **0**
| doubleValue      | Props for slider second value       | number          | **10**
| block          | Props for making block slider styles  | bool            | **false**, true
| noZero       | Props for exclude 0 as minimum value    | bool            | **false**, true
| step            | Props for slider stepper             | number          | **1**
| separator      | Props for total separator generated   | number          | -
| onChange        | Props for change first value         | func            | -
| onChangeDouble  | Props for change second value        | func            | -
| double    | Props for indicates double slider thumb    | bool            | **false**, true
