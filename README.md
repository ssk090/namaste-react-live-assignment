## Chapter 01 - Inception

## Chapter 02 - Igniting our App

## Chapter 03 - Laying the Foundation

- browserslist : it makes sure the website runs on the mentioned browser.
- polyfill : code which is a replacement for a newer version of code.
- suppose your browser does not understand promises, then promises code is converter into some other piece of code.
- ES6 is newer version of javascript
- babel : Transpiler or compiler
- npm run === npx
- in commands, we can also write npm run start or npx start
- Reconciliation : 
    - React uses a technique called "reconciliation" to update the user interface (UI) when the state of a component changes. 
    - The process involves comparing the current representation of the UI (the "virtual DOM") with a new representation, and making the minimal set of changes necessary to bring the real DOM into alignment with the virtual one. 
    - This allows React to update the UI efficiently, by making only the changes that are actually needed, rather than re-rendering the entire component tree.
- React.createElement is an Object, then this Object is converter into HTML code and it is put upon the DOM
- JSX : 
    - JavaScript XML
    - JSX is a syntax extension for JavaScript. 
    - It allows you to write HTML-like elements in your JavaScript code, which are then transpiled into regular JavaScript function calls. 
    - It is used by React to describe the structure of a user interface. When a JSX element is encountered, React converts it into a lightweight object that represents that element, and uses that object to update the real DOM. 
    - This makes it easy to build and update complex user interfaces, by describing them as a tree of components, each of which can be updated independently.
    - HTML inside JavaScript ? NO
    - JSX is HTML like syntax. Fancy way to write HTML inside javascript
    - Facebook developers built JSX
    - Component Composition :
        - Component composition in React refers to the practice of creating and using smaller, reusable components to build larger, more complex components. This allows for better organization and maintainability of code, as well as the ability to easily reuse and update components in different parts of the application.
        - There are several ways to compose components in React, including:
            - Using props to pass data and callbacks between components
            - Using Higher-Order Components (HOCs) to wrap and modify existing components
            - Using Render Props to share logic and state between components
            - Using Context to share data and callbacks across multiple components in the component tree
        - An example of component composition in React might be a navigation bar component that is made up of smaller, reusable components such as a logo, menu items, and a search bar. Each of these smaller components can be reused and updated independently, making it easier to maintain and update the navigation bar as a whole.
        
### Reference
- https://reactjs.org/docs/reconciliation.html
- https://www.npmjs.com/package/babel-plugin-transform-remove-console
## Chapter 04 - Talk is Cheap, show me the code
