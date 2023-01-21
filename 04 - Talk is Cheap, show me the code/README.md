# Chapter 04 - Talk is Cheap, Show me the code

## Notes

### Is JSX mandatory for React?
- JSX is not mandatory for React, but it is the recommended way to write components in React. JSX is a syntax extension for JavaScript that allows you to write HTML-like elements in your JavaScript code. It makes it easier to read and write React components, and it also allows for better tooling and debugging. However, you can also use React without JSX by using React.createElement() function to create elements.

### Is ES6 mandatory for React?
- ES6, also known as ECMAScript 6, is not mandatory for React, but it is strongly recommended as it makes writing React code more concise and easier to understand. ES6 introduced many new features to JavaScript such as arrow functions, classes, template literals, and destructuring, which can be used in React development.
- Using ES6 features in React can make your code more readable and maintainable. However, you can also use React with older versions of JavaScript such as ES5. However, you will likely find that using ES6 features makes your code more readable and maintainable.
- It's worth noting that React is written in modern JavaScript, so using the latest version of JavaScript is recommended for best performance.

### ```{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>} in JSX```
- In JSX, the way an element or component is written can determine how it is rendered and how it interacts with other elements and components. The three examples you provided, {TitleComponent}, {<TitleComponent/>} and {<TitleComponent><TitleComponent/>} , are different ways of writing a component and each has a different meaning and effect.
- ```{TitleComponent}```: This is an example of a component being passed as a property to another component. This is typically used when you want to pass data or callbacks to a component as props. For example, you might use this syntax to pass a title string to a TitleComponent:
```
<ParentComponent title={TitleComponent} />
```
- ```{<TitleComponent/>}``` : This is an example of a component being rendered as a child of another component. This is typically used when you want to include a component within another component's layout or when you want to pass props to a child component.
```
<ParentComponent>
  <TitleComponent title="Hello World" />
</ParentComponent>
```
- ```{<TitleComponent><TitleComponent/>}``` : This is an example of a component being rendered inside another component. This is typically used when you want to include multiple instances of the same component within another component's layout.
```
<ParentComponent>
  <TitleComponent title="Hello World" />
  <TitleComponent title="Hello World Again" />
</ParentComponent>
```
- It's important to note that the first example will not render the component, it just sends the component as a property and the component should be rendered inside the parent component using the second or third example.
- In general, it's important to understand the different ways to write and render components in JSX in order to effectively use and organize your code. Each of these three examples has different use cases and it's important to choose the right one depending on your needs.

### How can I write comments in JSX?
- In JSX, comments are written using curly braces ```({})``` and the JavaScript comment syntax. To write a single-line comment, you can use the ```//``` at the beginning of the comment. To write a multi-line comment, you can use the ```/*``` and ```*/``` around the comment.
-  ```{/* This is a single-line comment */}```

### What is ```<React.Fragment></React.Fragment>``` and ```<></>``` ?
- React.Fragment is a component that can be used in JSX to group a set of children without adding extra nodes to the DOM. It is useful when you want to return multiple elements from a component without adding an extra parent element around them.
- ```<React.Fragment></React.Fragment>``` is the syntax for using the React.Fragment component.
```
<React.Fragment>
  <p>This is a child element of the fragment.</p>
  <p>This is another child element of the fragment.</p>
</React.Fragment>
```
- As of React v16.2, you can use the shorthand syntax ```<></>``` instead of ```<React.Fragment></React.Fragment>``` to create a fragment, it's the same thing.
```
<>
  <p>This is a child element of the fragment.</p>
  <p>This is another child element of the fragment.</p>
</>
```
- It's worth noting that React.Fragment and ```<></>``` will not add any extra elements to the DOM, they are only used to group elements together and make the JSX more readable.

### What is Virtual DOM?
- The Virtual DOM (Document Object Model) is a programming concept used in JavaScript libraries and frameworks, such as React, to improve the performance of web applications. It is a lightweight in-memory representation of the actual DOM, which allows for efficient updates and re-rendering of components in response to changes in the data or user interactions. When changes are made to the virtual DOM, a diffing algorithm is used to determine the minimal set of updates needed to be made to the actual DOM, reducing the amount of work the browser has to do and improving the overall performance of the application.

### What is Reconciliation in React?
- Reconciliation is the process that React uses to update the Virtual DOM and the actual DOM in response to changes in the data or user interactions. When a component's props or state changes, React will compare the updated virtual DOM tree with the previous one, and determine the minimal set of updates needed to be made to the actual DOM. This process is known as "reconciliation."
- React uses a algorithm called "reconciliation" to determine which components need to be re-rendered and how the changes should be reflected in the actual DOM. This algorithm uses the component's unique keys, as well as information about the component's type and props, to determine the minimal set of updates needed to be made to the actual DOM. By using this process, React is able to efficiently update the user interface while minimizing the amount of work the browser has to do, resulting in better performance for web applications.

### What is React Fiber?
- React Fiber is a complete re-implementation of React's core algorithm. It was introduced in React 16.0 and it aims to improve the overall performance of web applications, particularly with complex and high-frequency updates.
- One of the main feature of React Fiber is that it allows React to split rendering work into smaller chunks, and spread it out over multiple frames. This allows React to more efficiently schedule and prioritize different types of updates, and to better utilize the browser's idle time. This results in smoother animations and interactions, and less jank.
- Fiber also includes new features such as:
    - The ability to pause, abort, or reuse work on different components
    - Improved error handling
    - A new way of handling layout and positioning using the new "layout effects"
    - A new way of handling suspense, which allows components to "wait" for certain data before rendering
- React Fiber also provides a stable and predictable behavior for the developer and improved user experience for the end-users.

### Why we need keys in React? When do we need keys in React?
- In React, keys are used to help identify which items in a list have changed, been added, or been removed. When a list of items is rendered in React, the framework uses the key property to keep track of each item. This allows React to make efficient updates to the list when the data changes, by reusing existing elements and adding or removing elements as necessary.
- When a list is rendered, React will create a new virtual DOM tree for each item in the list. The key property is used to identify each item in the list and ensure that the same item has the same key across different renders. If a key is not provided for an item, React will use the item's index in the array as the key, which can lead to unexpected behavior and errors when the list is updated.
- There are some cases when keys are necessary:
    - When rendering a list of items
    - When using Higher-order components
    - When using React Router
    - When using dynamic children in JSX
- In general, it is recommended to use a unique and stable value as key, like an ID, that is available on the data of the item being rendered.
- It's important to note that keys should only be used when the list is being re-rendered, not when the list is being filtered or sorted, because the order of the items will change, but the key will be the same.

### Can we use index as keys in React?
- It is possible to use the index of an item as its key when rendering a list in React, but it is generally not recommended. When using the index as a key, React uses the index to identify each item in the list, which can lead to unexpected behavior and errors when the list is updated.
- The problem with using index as key is that when the list is updated, React compares the keys of the items in the old and new lists to determine which items have been added, removed, or moved. If two items have the same index but different data, React will treat them as the same item and not update the component correctly, which can lead to bugs and inconsistencies in the rendered list.
- Additionally, when the list is reordered or filtered, the index as key will change which can lead to React re-mounting the component instead of re-using them. This can cause a performance hit and can also lead to unexpected behavior.
- It's recommended to use a unique and stable value as key, like an ID, that is available on the data of the item being rendered. This will ensure that React can correctly identify and update the items in the list when the data changes.

### What is props in React? ways to pass props ?
- In React, props (short for "properties") are a way to pass data from a parent component to a child component. Props are used to customize the behavior and appearance of a component, and are passed to the component as an object when it is rendered.
- Props are used to pass data down the component tree and are read-only, meaning that the child component cannot modify the props passed to it. Props are passed to the component using JSX syntax, as attributes on the JSX element representing the component.
- For example, consider a component called Welcome which takes a name props and display it:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
- The parent component can then pass the name prop to the Welcome component when it is rendered, like this:
```
<Welcome name="John" />
```
- Another way to pass props is by using the spread operator this allows to pass all the properties of an object as props.
-For example:
```
const myProps = {name: 'John', age: 30}
<Welcome {...myProps} />
```
- It's worth mentioning that when a function component is defined using an arrow function, the props can be destructured in the function signature, which makes them more readable and convenient to use:
```
const Welcome = ({name}) => <h1>Hello, {name}</h1>;
```
- It's also worth noting that React also has a built-in way to pass props down to child components without having to pass them down explicitly through each level of the component tree, called context. But it's considered an experimental feature and it's not recommended to be used in most cases, instead it's recommended to use props and lift state up.

### What is a Config Driven UI ?
- A Config Driven UI, also known as a "configurable user interface," is a pattern for building user interfaces in which the layout, behavior, and appearance of the interface are defined by a configuration file, rather than hard-coded into the application's source code.
- This approach allows developers to separate the concerns of defining the structure of the interface from the concerns of implementing the functionality of the interface. The configuration file can be used to define the structure of the interface, such as the layout of the components, the props that are passed to each component, and the behavior of the components in response to user interactions.
- The main advantage of this approach is that it allows non-technical users to make changes to the interface without having to modify the application's source code. This allows for greater flexibility and ease of use, and can also be useful for localization and localization.
- The configuration file can be in different formats like JSON, YAML, TOML or XML, it depends on the implementation of the developer.
- The config driven UI approach is commonly used in web-based applications that require dynamic, data-driven interfaces, such as dashboards, analytics platforms, and content management systems.
