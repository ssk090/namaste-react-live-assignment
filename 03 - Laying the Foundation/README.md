# Chapter 03 - Laying the Foundation
## JSX :
- JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like elements and components in their JavaScript code. It was developed by Facebook and is used in React and other JavaScript libraries to create and manipulate the structure of web pages and applications.
- JSX allows developers to write elements and components as if they were HTML tags, but with the added ability to include JavaScript expressions, variables, and functions inside them. For example, instead of writing a button element using traditional JavaScript, a developer can use JSX to write:

```
<button onClick={this.handleClick}>Click me</button>
```
- JSX is not natively supported by JavaScript engines, so it needs to be compiled into JavaScript using a transpiler such as Babel. This process allows JSX code to be understood by the browser and executed as JavaScript.
- Overall, JSX is an efficient and easy way to write and structure components in React and other JavaScript libraries, making it a popular choice among developers.

## React.createElement vs JSX
- React.createElement and JSX are both ways to create and manipulate elements and components in React. However, they have some key differences:
- React.createElement is a JavaScript function that takes three arguments: the element type, its properties, and its children. It returns a plain JavaScript object that represents the element or component. For example, to create a button element using React.createElement, the code would look like this:
```
React.createElement("button", { onClick: this.handleClick }, "Click me")
```
- JSX, on the other hand, is a syntax extension for JavaScript that allows you to write HTML-like elements and components directly in your JavaScript code. It looks similar to HTML, but it uses JS expressions to include variables, functions, and other JavaScript elements. To create the same button element using JSX, the code would look like this:
```
<button onClick={this.handleClick}>Click me</button>
```
- React.createElement is the "underlying" function that React uses when it compiles JSX code into JavaScript. In other words, when you use JSX, React will automatically transpile it into calls to React.createElement behind the scenes.
- React.createElement is more verbose and might be harder to read and write than JSX, it also can be less performant than JSX as it creates a new object for each element. JSX is more readable and intuitive, it also allows for better performance as it does not create an object for each element.
- In summary, React.createElement is a function that creates React elements, while JSX is a syntax extension that allows you to write those elements in a more readable and intuitive way, in the end both of them will create the same elements.

## Benefits of JSX
- JSX has several benefits when used in React and other JavaScript libraries:
- Improved readability and maintainability: JSX allows developers to write elements and components as if they were HTML tags, which makes it easier to understand the structure and layout of the code. This also makes it easier to locate and update specific elements or components.
- Increased productivity: JSX eliminates the need to manually create and manipulate elements using JavaScript, which can save time and improve developer productivity.
- Better performance: When using JSX, the React library can optimize the update and rendering of elements and components, resulting in better performance.
-Type checking: Some JavaScript libraries that support JSX like TypeScript, Flow, etc.. can add type checking to your code, this will help you to catch errors and bugs early on, as well as make it easier to understand the codebase.
- Reusability: JSX allows developers to create reusable components that can be easily shared and reused throughout the application, improving code organization and maintainability.
- Easier to integrate with other libraries and frameworks: Many popular libraries and frameworks like Next.js, Gatsby, etc.. support JSX, making it easier to integrate React with other technologies and tools.
- Overall, JSX is a powerful and versatile tool that can help developers write better, more efficient, and more maintainable code in React and other JavaScript libraries.

## Babel and parcel role in JSX
- Babel and Parcel are JavaScript tools that are commonly used in conjunction with JSX.
- Babel: Babel is a JavaScript transpiler that allows developers to use modern JavaScript features, such as JSX, that are not yet supported by all browsers. It converts JSX code into plain JavaScript code that can be understood and executed by the browser. This process is called transpilation. With the help of Babel, developers can use JSX in their code without worrying about browser compatibility issues.
- Parcel: Parcel is a web application bundler that automates the process of packaging and delivering code to the browser. It can handle JSX code as well as other types of code and assets, such as CSS, images, and fonts. It also automatically runs the transpilation process when it encounters JSX code. Parcel can bundle all of the code and assets together into a single file, making it easy to deliver the application to the browser.
- In summary, Babel is a transpiler that converts JSX code into plain JavaScript that can be understood by the browser, and Parcel is a web application bundler that automates the process of packaging and delivering code to the browser. Together, they make it easy for developers to use JSX in their code and ensure that it is compatible with different browsers.

## Role of type arrtibute in script tag ? and what are the options available ?
- The type attribute in a script tag is used to specify the type of script that is being included in the HTML document. The value of the type attribute should be a valid MIME type, such as "text/javascript" or "application/javascript".
-The most common value for the type attribute is "text/javascript", which is the default value if the attribute is not specified. This tells the browser that the script is written in JavaScript and should be executed as such.
- Another common value is "application/javascript" which is an equivalent to "text/javascript".
- Other options for the type attribute include:
- "text/ecmascript": This is an older value for the type attribute that is used to indicate that the script is written in ECMAScript, which is the standard for JavaScript.
- "application/ecmascript": This is an older value for the type attribute that is used to indicate that the script is written in ECMAScript, which is the standard for JavaScript.
- "text/vbscript": This value is used to indicate that the script is written in VBScript, which is a scripting language that is only supported by Internet Explorer.
- "application/json": this value is used when script is in a form of JSON.
- It's important to note that the type attribute is optional and if it is not present, most modern browsers will assume the script is JavaScript. However, it's considered a best practice to always include the type attribute to ensure that the script is executed correctly in all browsers.

## ```{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>} in JSX```
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