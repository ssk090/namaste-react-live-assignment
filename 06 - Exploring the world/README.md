# Chapter 06 - Exploring the world

## Notes

- When react updates any state variable then react rerenders the whole component
- it triggers the reconciliation process
- for every ui change we need state in react
- Microservices and Monolithic architecture
- Separation of Concern : Every small microservices have their own work to do. Single responsibility
- call api under componentDidMount or useEffect
- either state changes or props changes, then my component rerenders in UI
- useEffect with empty dependency array[] then it will be called once after render
- useEffect with [some dependencies] then it will run first on page load + everytime after render(means when those dependencies change)

## Assignment

### What is a Microservice ?

- A microservice is an architectural style of building software systems as a collection of small, independent services that communicate with each other through well-defined APIs. Each microservice is designed to be self-contained, so that it can be developed, deployed, and scaled independently of the other microservices. This approach allows organizations to build and maintain large, complex applications more easily, by dividing the workload into smaller, manageable parts.

- Microservices are typically built using lightweight, fast-performing technologies, such as containers, and they are designed to be deployed on modern, cloud-based infrastructure. They are also typically designed to be fault-tolerant and to support automatic scaling, so that they can handle changes in load without manual intervention.

- Overall, the goal of a microservice architecture is to enable organizations to build and deploy applications more quickly, with greater flexibility and scalability, and with lower costs and risks.

### What is Monolith architecture?

- Monolithic architecture is a traditional approach to building software applications, in which the entire application is built as a single, tightly-coupled unit. In a monolithic architecture, all of the components of the application, such as the user interface, business logic, and database access, are tightly integrated and run as a single process on a single server.

- The monolithic architecture is relatively simple to build and deploy, since all of the components are tightly integrated and run in a single process. However, as applications grow in size and complexity, they can become more difficult to maintain, test, and scale. In a monolithic architecture, making changes to one component of the application can have unintended consequences for other components, and deploying new features or fixing bugs can require a complete rebuild and deployment of the entire application.

- In recent years, the trend in software development has moved away from monolithic architecture and towards more modular, microservice-based architectures, as a way of overcoming the limitations of monolithic architecture. In a microservice architecture, the application is broken down into small, independent services that can be developed, deployed, and scaled independently of each other, allowing for greater flexibility and scalability.

### What is the difference between Monolith and Microservice?

- Monolithic architecture and microservice architecture are two different approaches to building software applications. The key differences between the two are:

- Architecture: In a monolithic architecture, the entire application is built as a single, tightly-coupled unit, with all components integrated into a single process that runs on a single server. In a microservice architecture, the application is broken down into a collection of small, independent services that communicate with each other through well-defined APIs.

- Scalability: In a monolithic architecture, the entire application must be deployed and scaled as a single unit, making it difficult to scale individual components to meet changing demand. In a microservice architecture, each service can be deployed and scaled independently, making it easier to meet changing demand and scale the application as a whole.

- Maintenance: In a monolithic architecture, making changes to one component of the application can have unintended consequences for other components, making maintenance and updates more complex. In a microservice architecture, each service can be maintained and updated independently, reducing the risk of unintended consequences.

- Deployment: In a monolithic architecture, deploying new features or fixing bugs can require a complete rebuild and deployment of the entire application. In a microservice architecture, new features can be deployed as separate services, reducing the risk of affecting other parts of the application during deployment.

- Flexibility: In a monolithic architecture, adding new features or making changes to the application can be difficult and time-consuming. In a microservice architecture, new features can be added or changes made by adding or modifying individual services, making it easier to add and modify the application over time.

- Overall, the choice between a monolithic architecture and a microservice architecture depends on the specific needs and requirements of the application and the organization building it. Microservice architecture is typically better suited to large, complex applications, while monolithic architecture is simpler and may be a better fit for smaller or simpler applications.

### Why do we need a useEffect Hook?

- The useEffect hook is a key feature of React, a popular JavaScript library for building user interfaces. The useEffect hook allows you to perform side effects in your React components, such as setting up a subscription to a data source, updating the document title, or sending an analytics event.

- The useEffect hook is needed because React only updates the UI when the component's state or props change, and does not automatically perform side effects in response to these updates. By using the useEffect hook, you can specify the side effects that should occur in response to changes in state or props, and React will automatically manage the execution of these effects.

- Here are some examples of when you might use the useEffect hook:

- Fetching data: You can use the useEffect hook to fetch data from an API and update the component's state with the result.

- Setting up a subscription: You can use the useEffect hook to set up a subscription to a data source, such as a real-time database, and update the component's state in response to changes in the data.

- Updating the document title: You can use the useEffect hook to update the document title to reflect the current state of the component.

- Sending analytics events: You can use the useEffect hook to send analytics events in response to changes in the component's state or props.

- In short, the useEffect hook is an essential tool for performing side effects in React components, and allows you to build dynamic, interactive user interfaces with ease.

### What is Optional Chaining?

- Optional chaining is a feature in modern programming languages that allows you to access a property of an object or an element of an array, even if that object or array is null or undefined. Without optional chaining, attempting to access a property or element of a null or undefined value would result in a runtime error.

- Optional chaining is useful because it allows you to safely access nested properties or elements without having to perform a lot of null checks or use conditional statements. For example, consider the following JavaScript code without optional chaining:

```
let user = {
  name: "John",
  address: {
    city: "New York"
  }
};

let city;
if (user && user.address && user.address.city) {
  city = user.address.city;
} else {
  city = "Unknown";
}
```

- With optional chaining, you can simplify this code to:

```
let city = user?.address?.city || "Unknown";
```

- The ?. operator allows you to safely access the address property of the user object and the city property of the address object, without having to check if user or address is null or undefined. If either user or address is null or undefined, the entire expression will return undefined, and the || "Unknown" part of the expression will provide a default value.

- Optional chaining is supported in modern JavaScript (ES2020) and other programming languages, including TypeScript, Swift, and Kotlin.

### What is Shimmer UI?

- Shimmer UI is a visual effect that is used to indicate that content is being loaded in a user interface. It typically consists of a series of shimmering or pulsing lines or shapes that simulate the appearance of loading content. The purpose of shimmer UI is to provide feedback to the user that something is happening and to prevent the user from feeling that the application has frozen or is not responsive.

- Shimmer UI is often used when loading content from a slow data source, such as a remote API, or when loading large amounts of data that take a long time to process. The shimmer effect helps to make the application feel more responsive and helps to maintain the user's sense of progress, even when the actual content is not yet available.

- Shimmer UI can be implemented in various ways, depending on the platform and the specific requirements of the application. For example, it can be implemented as a native component in a mobile app, as a JavaScript component in a web app, or as a custom animation in a desktop app.

- Overall, shimmer UI is an important tool for improving the user experience of an application and providing feedback during the loading process.

### What is the difference between JS expression and JS statement ?

- In JavaScript, expressions and statements are two different types of code units that serve different purposes.

- An expression is any valid unit of code that can be evaluated to produce a value. Expressions can be used as part of a larger expression, as an argument to a function, or as part of a larger statement. Examples of expressions in JavaScript include:

- Literals (e.g. 1, "hello", true)
- Variables (e.g. x, name)
- Arithmetic operations (e.g. 1 + 2, a \* b)
- Function calls (e.g. Math.max(1, 2), alert("hello"))
- A statement, on the other hand, is a complete unit of code that can be executed and can contain one or more expressions. Statements do not produce a value and cannot be used as part of a larger expression. Examples of statements in JavaScript include:

- Variable declaration (e.g. let x = 1)
- Control flow statements (e.g. if (x > 0) { ... }, for (let i = 0; i < 10; i++) { ... })
- Function definitions (e.g. function add(a, b) { return a + b; })
- In short, expressions are units of code that produce a value, while statements are units of code that perform an action and do not produce a value. Both expressions and statements are used together to write complete programs in JavaScript.

### What is Conditional Rendering, explain with a code example

- Conditional rendering in React is a technique for conditionally rendering elements or components in a user interface based on certain conditions. The idea is to only render elements or components that should be displayed at a given time, and to not render elements or components that should not be displayed. This helps to keep the user interface updated and optimized.

- Here's an example of conditional rendering in React using a simple ternary operator:

```
import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
```

- In this example, the LoginControl component uses conditional rendering to determine what to render based on the isLoggedIn state. When the isLoggedIn state is true, the LoginControl component renders a LogoutButton. When the isLoggedIn state is false, the LoginControl component renders a LoginButton.

- In this way, the LoginControl component uses conditional rendering to dynamically render different elements based on the state of the application, which helps to keep the user interface up-to-date and optimized.

### What is CORS?

- CORS stands for Cross-Origin Resource Sharing, and it is a security feature implemented by web browsers to prevent cross-site scripting (XSS) attacks.

- In a web application, the origin of a web page is defined by the combination of the protocol (e.g. http or https), the domain name, and the port number. For example, https://example.com:443 is a different origin than https://example.org:443.

- CORS is used to determine if a web page from one origin can access resources from another origin. By default, web browsers will block any request made from a web page to a resource that is on a different origin for security reasons.

- However, in some cases, you may want to allow resources from one origin to be accessed by pages from another origin. This is where CORS comes in. CORS allows a server to specify which origins are allowed to access its resources, by sending a response header (Access-Control-Allow-Origin) that indicates which origins are allowed to access the resource.

- For example, if https://example.com wants to access resources from https://api.example.org, the server at https://api.example.org must send a response header Access-Control-Allow-Origin: https://example.com to indicate that resources from the https://api.example.org origin are accessible by pages from the https://example.com origin.

- In summary, CORS is a security feature that restricts access to resources from a different origin, and it allows servers to specify which origins are allowed to access their resources.

### What is async and await?

- async and await are JavaScript keywords that are used to simplify the process of working with asynchronous functions.

- async is a modifier that is used to define an asynchronous function. An asynchronous function is a function that runs in the background and allows other code to continue to run without blocking, even if the function has not yet completed.

- await is a keyword that is used inside an asynchronous function to wait for a Promise to resolve before continuing to the next line of code. With await, you can write asynchronous code that looks and behaves like synchronous code.

- Here's a simple example of using async and await to retrieve data from an API:

```
async function getData() {
  const response = await fetch('https://api.example.org/data');
  const data = await response.json();
  return data;
}

getData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

- In this example, the getData function is defined as asynchronous using the async keyword. The function uses await to wait for the fetch function to complete and for the json method to return the parsed data. The function returns a Promise that resolves with the data from the API. The then method is used to log the data to the console and the catch method is used to log any errors.

- With async and await, you can write asynchronous code that is more readable and easier to understand than traditional callback-based or Promise-based asynchronous code.

### What is the use of `const json = await data.json();`

- The line const json = await data.json(); is used to parse the response from a network request as JSON data.

- The data object in this example is the response from a network request, such as an API call using fetch. The data.json() method is used to parse the response as JSON data. The await keyword is used to wait for the JSON data to be parsed before continuing to the next line of code.

- By using await with data.json(), we can write asynchronous code that looks and behaves like synchronous code. This makes the code easier to read and understand, as it avoids the callback hell and chaining of Promises that can often result from traditional asynchronous code.

- The result of the data.json() method is stored in the json constant, which can then be used in the rest of the code to access the parsed JSON data.
