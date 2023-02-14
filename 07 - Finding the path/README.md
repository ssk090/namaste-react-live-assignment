# Chapter 07 - Finding the path

## Notes

- render first then useEffect gets called
- useEffect will always get called after render if we dont pass empty dependency array [] to the parameter.
- if we pass any state variable in the dependency array, then react will track the state variable and call the useEffect block when ever the state variable changes
- Never create a component inside a component
- never write useState inside a if else block because it leads to inconsistency. React would not know if any state variable is declared which is inside the if else block
- never write useState inside a for loop.
- useState is a hook which react gives you to create local state variables inside a funcitonal component.
- never use useState outside a functional component.
- you can create more than one useEffect blocks.
- React router dom for routes
- https://reactrouter.com/en/main/routers/create-browser-router
- useRouteError : Hook which catches all the errors. It does not logs the error in the console.
- SPA : Single Page Application
- two types of routing: 1. client side, 2. server side
- All the children will go into the outlet according the the route
- Object.values :

## Assignments

### What are various ways to add images into our App? Explain with code examples ?

- There are several ways to add images to a web app. Here are some of the most common ways, along with code examples:

- Using the img tag:
- The simplest way to add an image is by using the HTML img tag. This method is suitable for static images that don't change frequently. Here is an example:

```
<img src="/path/to/image.jpg" alt="Alt Text" />
```

- Using the require statement:
- If you're using a bundler like Webpack or Parcel, you can use the require statement to import the image file and use it as the src for the img tag. This method is useful when you need to reference the image dynamically. Here is an example:

```
import image from './path/to/image.jpg';

<img src={image} alt="Alt Text" />

```

- Using CSS background-image:
- You can also use CSS to set the background-image of an element. This method gives you more control over the image's position and size. Here is an example:

```
import image from './path/to/image.jpg';

<div style={{ backgroundImage: `url(${image})` }}>
  // content
</div>

```

- Using inline SVG:
- SVG images can be added to an app using the svg tag or the img tag with the src attribute pointing to an SVG file. Here is an example of inline SVG:

```
<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
</svg>

```

### What would happen if we do console.log(useState())?

- If you call console.log(useState()), it will log an array with two items to the console:

```
[initialState, function]
```

- The initialState value will be the initial state that you pass to the useState hook, and the function will be used to update the state.

- However, you should never call useState outside of a React function component, as it violates the rules of Hooks. If you call useState outside of a component, it will throw an error:

```
Invalid hook call. Hooks can only be called inside of the body of a function component.
```

- Therefore, you should only call useState within a React function component, and not outside of it.

### How will useEffect behave if we don't add a dependency array ?

- If you don't add a dependency array to the useEffect hook, it will run on every render of the component, which could lead to performance issues.

- When useEffect is called without a dependency array, it acts like componentDidMount and componentDidUpdate lifecycle methods combined. This means that it will run both after the initial render of the component and after every subsequent re-render caused by a state or props update.

- Here is an example of a useEffect hook without a dependency array:

```
useEffect(() => {
  console.log('Component did mount or update');
});
```

- In this example, the console.log statement will be executed after the initial render of the component and after every subsequent re-render. This behavior can be useful in some cases, but it can also cause unnecessary re-renders if the effect doesn't need to be run on every update.

- To avoid this, you can add a dependency array to the useEffect hook to specify which state or props the effect depends on. This tells React to only run the effect when the specified dependencies have changed. If you don't have any dependencies, you can pass an empty array [] to ensure that the effect runs only once after the initial mount.

```
useEffect(() => {
  console.log('Component did mount');
}, []);
```

- In this example, the console.log statement will only be executed once after the initial mount of the component.

### What is SPA?

- SPA stands for Single Page Application. It is a web application that loads and interacts with a single HTML page, dynamically updating the page as the user interacts with the application. This means that the user does not have to wait for a new page to load when they interact with the application, as the content is dynamically updated on the same page.

- SPAs are typically built using modern JavaScript frameworks like React, Angular, or Vue, and rely heavily on JavaScript to provide a smooth and interactive user experience. They often use client-side routing to handle navigation within the application, and rely on APIs and other backend services to retrieve and manipulate data.

- SPAs are popular because they provide a fast and seamless user experience, as the user doesn't have to wait for pages to load or reload. They can also be more easily maintained and updated, as changes can be made to a single codebase and deployed to production without the need to update multiple pages.

### What is difference between Client Side Routing and Server Side Routing?

- Client-side routing and server-side routing are two different approaches to handling navigation within a web application. Here are the key differences between them:

Client-side routing:

- In client-side routing, navigation is handled by JavaScript on the client-side, without requiring a full page refresh. When the user clicks a link or types a URL, the client-side code updates the browser's URL and renders the appropriate content on the page without making a request to the server. This approach is used in Single Page Applications (SPAs) built with frameworks like React, Angular, and Vue.

Server-side routing:

- In server-side routing, navigation is handled by the server, which sends back a new HTML page in response to each request. When the user clicks a link or types a URL, the browser sends a request to the server, which processes the request, generates a new HTML page, and sends it back to the browser. This approach is commonly used in traditional server-rendered applications built with frameworks like Ruby on Rails, Django, or ASP.NET.

Here are some key differences between the two approaches:

- Performance: Client-side routing can be faster than server-side routing, as it doesn't require a full page refresh for each navigation change, resulting in a smoother user experience. However, server-side routing can be better for initial page load times, as it can send back a fully rendered page.

- SEO: Server-side routing is generally better for SEO, as search engine crawlers can easily index the content of each page, while client-side routing can sometimes be more difficult to crawl.

- Complexity: Client-side routing can be more complex to set up and manage, as it requires more JavaScript code to handle the navigation and state of the application, while server-side routing can be simpler, as it relies on traditional web development techniques like server-side rendering and template languages.

- Overall, both client-side routing and server-side routing have their strengths and weaknesses, and the choice between the two will depend on the specific requirements and constraints of your application.
