# Chapter 01 - Inception
## 1. What is Emmet?
- Emmet is a plugin for text editors that allows for the rapid creation of HTML and CSS code using a shorthand syntax.
- Write more code quickly.

## 2. Difference between a Library and Framework?
- A library is a collection of pre-written code that can be used to perform specific tasks, such as handling input/output or connecting to a database. A developer can use the code in a library to add functionality to their own code without having to write it from scratch.
- A framework, on the other hand, provides a structure for building a specific type of application. It includes both the libraries and the architecture for how the code should be organized. A developer using a framework must work within the constraints of the structure provided, but the framework can help to ensure that the code is organized in a logical and maintainable way.
- In summary, a library is a collection of functions that can be called upon when needed, whereas a framework is a structure that defines how the application should be built and provides the libraries needed to build it.
- Both libraries and frameworks are reusable code written by someone else.

## 3. What is CDN? Why do we use it?
- Content Delivery Network.
- It is a system of distributed servers that are used to deliver web content to users based on their geographic location. 
- The goal of a CDN is to provide faster delivery of content by caching it on servers that are closer to the user.
- When a user requests a web page, the CDN redirects the request to the server closest to the user. This can significantly reduce the amount of time it takes for the page to load, as the distance the data has to travel is shorter. CDNs also help to distribute the load on the origin server and make the website more scalable.
- CDNs are commonly used for delivering large files, such as images, videos, and audio files, as well as for handling high traffic to a website. They are also used to protect a website from Distributed Denial of Service (DDoS) attacks by absorbing the traffic and filtering out malicious requests.
- In summary, CDN is used to accelerate the delivery of web content to users by caching it on servers that are closer to the user, It also help to distribute the load on the origin server, make the website more scalable, protect website from DDoS attacks and handle high traffic.

## 4. Why is React known as React?
- React is known as React because of its ability to "react" to changes in the user interface. React is a JavaScript library for building user interfaces, and it uses a concept called the virtual DOM (Document Object Model) to update the user interface efficiently.
- The virtual DOM is a representation of the actual DOM, and it allows React to keep track of the changes that need to be made to the user interface. When the data or state of the application changes, React updates the virtual DOM, and then figures out the most efficient way to update the actual DOM. This process is called "reconciliation."
- The name React was chosen because it describes the way the library updates the user interface in response to changes in the data or state. It reacts to changes and updates the user interface efficiently, which is one of its main features.
- In summary, React is known as React because it updates the user interface efficiently in response to changes in the data or state, React implements a virtual DOM that allows it to react to changes and update the user interface in an efficient way.

## 5. What is crossorigin in script tag?
- The "crossorigin" attribute in a script tag is used to indicate that the script should be loaded using CORS (Cross-Origin Resource Sharing). It allows a web page to request a script from a different origin (domain) than the one that served the web page.
- When a script is loaded from a different origin, the browser will add an "Origin" header to the request. The server can then choose to either allow or deny the request based on the value of the "Origin" header.
- The "crossorigin" attribute can have one of two values: "anonymous" or "use-credentials".
- "anonymous": The browser will not send any credentials (cookies, HTTP authentication, and client-side SSL certificates) with the request. The server can still choose to allow or deny the request based on the "Origin" header.
- "use-credentials": The browser will include credentials (cookies, HTTP authentication, and client-side SSL certificates) with the request. The server can choose to allow or deny the request based on the "Origin" header and the credentials.
- It is important to note that the "crossorigin" attribute should be used only if the server providing the script supports CORS and it's configured to allow the origin of the web page to access the script.
- In summary, the crossorigin attribute in script tag is used to indicate that the script should be loaded using CORS, the browser will add an "Origin" header to the request and the server can choose to either allow or deny the request based on the value of the "Origin" header, The "crossorigin" attribute can have one of two values: "anonymous" or "use-credentials"

## 6. What is diference between React and ReactDOM
- React and ReactDOM are two separate libraries that are often used together to build web applications.
- React is a JavaScript library for building user interfaces. It provides a way to create and manage components, which are reusable building blocks for the user interface. React also allows developers to create and manage the state and lifecycle of those components.
- ReactDOM, on the other hand, is a library that provides the ability to render React components to the Document Object Model (DOM), which is the structure of a web page. ReactDOM provides methods for manipulating the DOM, such as rendering components, updating the user interface, and handling events.
- In summary, React is a JavaScript library for building and managing user interfaces, and ReactDOM is a library that provides the ability to render React components to the DOM and manipulate it. React and ReactDOM are often used together to build web applications, but they can also be used independently of each other.

## 7. What is difference between react.development.js and react.production.js files via CDN?
- React.development.js and react.production.js are two different versions of the React library that are intended for different environments.
- The react.development.js file is intended for use during the development phase of a project. It contains additional features and tools that are helpful for debugging and troubleshooting, such as the ability to trace component updates and detect potential performance issues. This version of the library is also more verbose, meaning that it provides more detailed messages and warnings, which can be helpful when trying to identify and fix bugs.
- The react.production.js file, on the other hand, is intended for use in a production environment. It is a minified version of the library that is optimized for performance. This means that it is smaller in size and faster to load. It also doesn't contain the additional features and tools that are intended for development, as they are not needed in a production environment.
- When using CDN for React, it's important to use the correct version of the library for the environment that the application is running in, as using the development version in production can have a negative impact on performance, and using the production version in development can make it more difficult to troubleshoot issues.
- In summary, react.development.js is intended for use during the development phase of a project, it contains additional features and tools that are helpful for debugging and troubleshooting, it's more verbose and it's not optimized for performance. react.production.js is intended for use in a production environment, it's a minified version of the library that is optimized for performance, it doesn't contain the additional features and tools that are intended for development.

## 8. What is async and defer?
- "async" and "defer" are attributes that can be used when loading external JavaScript files via the script tag. These attributes determine the behavior of the script and how it affects the loading of the web page.
- "async" attribute tells the browser to download the script file asynchronously, which means that it will be loaded in parallel with the rest of the page. Once the script is downloaded, the browser will execute it as soon as it's ready, regardless of whether the rest of the page has finished loading. This can improve the overall loading time of the page, but it can also cause the script to execute before the page has fully loaded and rendered.
- "defer" attribute tells the browser to download the script file in the background and execute it only after the page has finished loading. This ensures that the script does not block the loading of the page, but it also means that the script may not be executed until after the page has been fully rendered. This can be useful when the script is not critical to the initial rendering of the page.
- It's important to note that both async and defer attributes only apply to external scripts, the scripts included in HTML directly will be executed before the parsing of the HTML is completed.
- In summary, "async" attribute tells the browser to download the script file asynchronously and execute it as soon as it's ready, which can improve overall loading time but can also cause script to execute before the page has fully loaded and rendered. "defer" attribute tells the browser to download the script file in the background and execute it only after the page has finished loading, which ensures that the script does not block the loading of the page but also means that the script may not be executed until after the page has been fully rendered.
