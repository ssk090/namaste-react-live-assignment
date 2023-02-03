# Chapter 05 - Let's Get Hooked!

## Notes

- import {Title} from './components/Header' --> Named Import
- import Header from './components/Header' --> Default Import
- Import * as Obj from './components/Header'; <br>
Obj.Title --> we can use like this as well
- ```useState``` is a hook in React that allows you to add state to functional components. It returns an array with two values: the current state value, and a function that allows you to update it.

## Assignment
### what is difference between named export, default export and *as export ?
- Named exports: Named exports allow you to export multiple values from a module by giving them a name. Named exports are imported using curly braces {}:
```
// module1.js
export const namedExport1 = 'named export 1';
export const namedExport2 = 'named export 2';

// module2.js
import { namedExport1, namedExport2 } from './module1.js';
```
- Default exports: A default export allows you to have a single default export for a module. The default export can be imported using the default import syntax, which doesn't use curly braces:
```// module1.js
export default 'Default export';

// module2.js
import defaultExport from './module1.js';
```
- Exports with an alias: An export with an alias allows you to change the name of an export when you import it. This can be useful when you want to import a module but the name of the export conflicts with a variable or function name in your code.
```// module1.js
export const namedExport = 'Named export';

// module2.js
import { namedExport as alias } from './module1.js';
```
### Importance of config.js file 
-The config.js file in a React project can be used to store configuration settings and data that you want to use throughout your application. The purpose of this file is to centralize all the configuration data in one place so that it can be easily accessed and managed.
- For example, you could use a config.js file to store API endpoints, environment variables, default values, or any other settings that are relevant to your application. By keeping these values in a single file, you can make it easier to maintain your code and keep track of the configuration data that is used throughout your application.
- By using a config.js file, you can also make it easier to manage environment-specific configurations. For example, you could have separate config files for development, testing, and production environments, and switch between them based on the current environment.
- In conclusion, a config.js file can be an important part of a well-organized React application, as it allows you to centralize and manage configuration data, making it easier to maintain your code and handle different environments.

### What are React Hooks?
- React Hooks are a new feature in React 16.8 that allow you to add state and other React features to functional components. Prior to Hooks, only class components could have state and lifecycle methods, which made it more difficult to reuse stateful logic between components. With Hooks, you can extract stateful logic from a component and share it with other components, making your code more reusable and flexible.
- There are several built-in Hooks in React, including useState, useEffect, useContext, useReducer, and others.
- useState is the most basic Hook. It allows you to add state to a functional component by returning an array with two values: the current state, and a function to update the state.
- useEffect is a Hook that lets you perform side effects in functional components. It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
- useContext is a Hook that lets you access the context of a component without passing it down manually through props.
- useReducer is a Hook that lets you manage complex state updates in a functional component.
- React Hooks provide a more concise and performant way to add state and other React features to functional components, making it easier to write and manage React code.

### Why do we need useState Hook ?
- The useState Hook is used to add state to a functional component in React. State is a way to store and manage data that changes over time in a React component. With the useState Hook, you can add state to a functional component and manage its updates, making it easier to build dynamic and interactive user interfaces.
- Here are some common use cases for useState:
- Storing and updating form data: You can use useState to store and manage the values of form fields, such as input fields, checkboxes, and radio buttons.
- Displaying dynamic data: You can use useState to store and manage data that is loaded from an API or other data source, and display it in your component.
- Managing toggle state: You can use useState to store and manage the state of toggle elements, such as a toggle button or switch.
- Storing and updating user preferences: You can use useState to store and manage user preferences, such as the color scheme or font size, and persist them across different sessions.
- Implementing animations and transitions: You can use useState to store and manage the state of animations and transitions, such as showing and hiding elements, changing their position, or modifying their style.
- In conclusion, the useState Hook is an essential tool for adding state to functional components in React, allowing you to store and manage data that changes over time, build dynamic and interactive user interfaces, and implement complex logic in your components.

