### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import SearchBar from 'unify-react-mobile/build/SearchBar'` on top of your code.
3. Code your `<SearchBar />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<SearchBar />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|------------------|-------------------------------------|-----------------|----------------|
| className        | Props for applying custom classes   | string          | **""**
| autoCapitalize  | Props for input search autocapitalize attribute  | string  | -
| autoComplete   | Props for input search autocomplete attribute   | string    | -
| placeholder    | Props for searchbar placeholder       | string          | **""**
| value       | Props for searchbar value                | string          | **""**
| onChange    | Props for adding change function to searchbar   | func     | -
| onClick    | Props for adding click function to searchbar    | func      | -
| onInput    | Props for adding input function to searchbar   | func       | -
| onKeyDown   | Props for adding keydown function to searchbar   | func    | -
| onKeyUp    | Props for adding keyup function to searchbar   | func       | -
| onKeyPress   | Props for adding keypress function to searchbar  | func    | -

