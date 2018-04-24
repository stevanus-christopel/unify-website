### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import Footer from 'unify-react-mobile/build/Footer'` on top of your code.
3. Code your `<Footer />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<Footer />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|------------------|-------------------------------------|-----------------|---------------------|
| className        | Props for applying custom classes   | string          | **""**
| lang             | Props for setting value of lang     | string          | **"id"**, "en"
| androidURL       | Props for adding custom url on android app link | string     | **"#"**
| iosURL           | Props for adding custom url on ios app link  | string        | **"#"**
| contactUsURL     | Props for adding custom url on contact us link  | string     | **"#"**
| desktopURL       | Props for adding custom url on desktop link | string          | **"#"**
| termConditionsURL    | Props for adding custom url on TnC link | string          | **"#"**
| privacyURL       | Props for adding custom url on privacy link | string          | **"#"**
| onLanguageChange   | Props for adding change function to select element | func          | -
