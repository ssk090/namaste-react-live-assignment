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
-
