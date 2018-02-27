### Usage

1. Install **unify-react-native** by running `yarn add unify-react-native` or `npm install unify-react-native` on your project.
2. Use `import { Slider } from 'unify-react-native'` on top of your code.
3. Code your `<Slider />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Slider />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| min              | Props for slider minimal value      | number          | **0**
| max              | Props for slider maximal value      | number          | **100**
| value            | Props for slider first value        | number          | **0**
| doubleValue      | Props for slider second value       | number          | **10**
| block          | Props for making block slider styles  | bool            | **false**, true
| noZero       | Props for exclude 0 as minimum value    | bool            | **false**, true
| step            | Props for slider stepper             | number          | **1**
| separator      | Props for total separator generated   | number          | **undefined**
| onChange        | Props for change first value         | func            | -
| onChangeDouble  | Props for change second value        | func            | -
| double        | Props for indicates double slider thumb    | bool        | **false**, true
