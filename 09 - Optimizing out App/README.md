# Chapter 09 - Optimizing our App

## Notes

- we use hooks for reusability, redability and maintainability (separation of concerns)
- there should be a common place where we can place our utility functions and use it from there.
- custom hook : hooks are just normal functions
- it is always a good practice to clear the event Listener when ever you go out from that page
- Chunking == Code Spliting == Dynamic Bundling == Lazy Loading == on demand loading of bundles == Dynamic Import
- Bundling is good to a certain limit
- When ever we try to load the compoenent in demand, react Suspends the rendering
- Promise (Research)
- create hooks

## Assignments

### When and why do we need lazy()?

- In programming, the lazy() function or lazy evaluation is used to defer the evaluation of an expression until it is actually needed. This can be useful in a number of situations, including:
- Efficiency: Sometimes, evaluating an expression can be computationally expensive. If that expression is never actually used in the program, then all of that computation was wasted. By using lazy() to defer the evaluation until the expression is actually needed, we can potentially save a lot of computational resources.
- Infinite Data Structures: In some cases, we might be working with infinite data structures, such as an infinite sequence of random numbers. Trying to evaluate an infinite data structure in its entirety is impossible, but by using lazy() we can evaluate only the parts that we actually need.
- Memoization: Lazy evaluation can also be useful for memoization, which is a technique for storing the results of expensive function calls and returning the cached result when the same inputs occur again. By using lazy(), we can defer the evaluation of a memoized function until its results are actually needed, which can improve performance.
- Cyclic Dependencies: Lazy evaluation can be used to resolve cyclic dependencies. When there is a circular dependency between two or more variables, using lazy evaluation can help resolve the dependency by deferring the evaluation of one or more variables until they are actually needed.
- Overall, lazy() can be useful in situations where we want to defer the evaluation of an expression until it is actually needed. This can help improve performance, handle infinite data structures, implement memoization, and resolve cyclic dependencies.

### What is suspense?

- Suspense is a feature in React that allows components to defer rendering until some asynchronous work, such as data fetching or code splitting, is completed. With Suspense, we can display fallback content (such as a loading spinner) while waiting for the asynchronous work to finish, and then display the actual content once it's ready.

- Before the introduction of Suspense, handling asynchronous work in React required using third-party libraries or implementing custom solutions that could be difficult to manage and maintain. With Suspense, React provides a built-in way to handle asynchronous work that is easy to use and understand.

- Here's an example of how Suspense can be used to handle data fetching in a React application:

```
import React, { Suspense } from 'react';
import { fetchData } from './api';

const MyComponent = () => {
  const data = fetchData(); // Fetch data asynchronously

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataDisplay data={data} />
      </Suspense>
    </div>
  );
};
```

- In this example, the fetchData function fetches data asynchronously, and the DataDisplay component displays the data. We wrap the DataDisplay component in a Suspense component and provide a fallback prop that specifies what to display while waiting for the data to load. This way, we can display a loading spinner or some other indication that the data is being fetched.

- Overall, Suspense is a powerful tool in React that makes it easier to handle asynchronous work in a more declarative and intuitive way.

### Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

- The error "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition" occurs in React when a component tries to perform an expensive synchronous computation or rendering update while handling user input. This can cause the application to become unresponsive, resulting in a poor user experience.

- React's startTransition function, along with the Suspense component, can be used to solve this problem by allowing components to defer rendering and perform expensive work asynchronously, without blocking the main thread.

- Here's an example of how startTransition and Suspense can be used to handle this error:

```
import React, { useState, startTransition, Suspense } from 'react';
import { fetchData } from './api';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    startTransition(() => {
      setIsLoading(true);
      const newData = fetchData(); // Fetch data asynchronously
      setData(newData);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Data</button>
      <Suspense fallback={<div>Loading...</div>}>
        {data && <DataDisplay data={data} />}
      </Suspense>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
```

- In this example, we use the startTransition function to wrap the state updates that fetch and set the data, allowing them to be executed asynchronously. We also use the Suspense component to show a loading indicator while waiting for the data to load.
- By using startTransition and Suspense, we can ensure that the expensive work is performed asynchronously, without blocking the main thread, and that the user interface remains responsive and displays a loading indicator while waiting for the data to load.
- Overall, startTransition and Suspense can be powerful tools in React for improving the user experience and avoiding errors caused by expensive synchronous computations or rendering updates.

### Advantages and disadvantages of using this code splitting pattern?

- Code splitting is a technique used in web development to improve the performance of web applications by splitting the code into smaller, more manageable chunks, and loading them as needed. There are different patterns that can be used for code splitting, such as the client-side rendering pattern and the server-side rendering pattern. Here are some advantages and disadvantages of using the client-side rendering pattern for code splitting:

  - Advantages:

- Improved performance: Code splitting can significantly reduce the initial load time of a web application, as it allows the browser to download only the necessary code for the current page or component, rather than downloading the entire codebase.

- Faster time-to-interactive: By reducing the initial load time, code splitting can also improve the time it takes for a web application to become interactive, which can lead to a better user experience.

- Better developer experience: Code splitting can make it easier for developers to manage and maintain the codebase, as it allows them to work on smaller, more manageable chunks of code.

- Better caching: Code splitting can also improve caching by allowing the browser to cache the code for each page or component separately, which can reduce the amount of unnecessary downloads and improve the overall performance of the application.

  - Disadvantages:

- Complexity: Code splitting can add complexity to a web application, as it requires additional configuration and setup, and can be more difficult to implement and debug than a monolithic codebase.

- Network latency: Code splitting can also increase network latency, as it requires the browser to make additional requests to download the necessary code for each page or component.

- Compatibility: Code splitting may not be fully supported by all browsers or devices, which can limit its effectiveness and require fallbacks to be implemented.

- Overhead: Depending on the implementation, code splitting can introduce additional overhead, such as extra JavaScript code to manage the splitting and loading of the code, which can impact the overall performance of the application.

- Overall, code splitting can be an effective technique for improving the performance and manageability of web applications, but it requires careful consideration of the advantages and disadvantages, as well as proper implementation and testing to ensure that it meets the needs of the application and its users.

### When do we and why do we need suspense?

- React Suspense is a feature introduced in React 16.6 that enables components to suspend rendering while waiting for async data to load. In other words, Suspense allows you to handle loading states for asynchronous data in a more declarative and intuitive way.

- Here are some situations when you might need to use React Suspense:

- Data fetching: If your application needs to fetch data from an API, you can use Suspense to handle the loading state while the data is being fetched.

- Lazy loading: If your application has large components or libraries that are not needed on every page, you can use Suspense to load them lazily when they are needed.

- Dynamic imports: If your application uses dynamic imports, which are used to load modules on demand, you can use Suspense to handle the loading state while the module is being loaded.

- Server-side rendering: If your application uses server-side rendering, you can use Suspense to defer rendering until the data is available on the server.

  - The benefits of using React Suspense include:

- Cleaner code: With Suspense, you can handle loading states more declaratively, which can make your code cleaner and easier to read.

- Better user experience: By handling loading states more gracefully, Suspense can improve the overall user experience of your application.

- Simplified error handling: Suspense allows you to handle errors more declaratively, which can simplify error handling and make it easier to debug your code.

- Improved performance: By deferring rendering until data is available, Suspense can improve the performance of your application by reducing the time to first render and minimizing unnecessary renders.

- In summary, you might need to use React Suspense if your application needs to handle loading states for asynchronous data, lazy loading, dynamic imports, or server-side rendering. Suspense provides a cleaner, more declarative way to handle loading states, improves the user experience, simplifies error handling, and can improve performance.
