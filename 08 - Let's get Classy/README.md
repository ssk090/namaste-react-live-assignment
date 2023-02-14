# Chapter 08 - Let's get Classy

## Notes

- class based components is the older version of react.
- first constructor is called then render then componentDidMount
- API calls are called inside ComponentDidMount block in class components.
- Parent Constructor->Parent Render->Child Constructor->Child Render->Child ComponentDidMount->Parent ComponentDidMount
- When having a parent and two child:
  - Parent Constructor
  - Parent Render
  - First Child Constructor
  - First Child Render
  -       Second Child Constructor
  -       Second Child Render
  - First Child ComponentDidMount
  - Second Child ComponentDidMount
  - Parent ComponentDidMount
- END

- ComponentWillUnMount will get trigger when the component gets removed from the UI, basically we go to some other page

## Assignments

### How do you create Nested Routes react-router-dom cofiguration

```
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restraunt/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
```

### Read abt createHashRouter, createMemoryRouter from React Router docs.

- https://reactrouter.com/en/main/routers/create-hash-router
- https://reactrouter.com/en/main/routers/create-memory-router

### What is the order of life cycle method calls in Class Based Components?

- In Class-Based Components, the order of the lifecycle method calls can be divided into three phases:

- Mounting:
  - constructor()
  - static getDerivedStateFromProps()
  - render()
  - componentDidMount()
- Updating:
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()
- Unmounting:

  - componentWillUnmount()

- Let's discuss these lifecycle methods in more detail:

- Mounting:
  This phase starts when the component is being initialized and inserted into the DOM.

          a. constructor():
          This is the first method that is called when the component is initialized. It is used to set the initial state and binding the event handlers.

          b. static getDerivedStateFromProps():
          This is a static method that is called just before the render() method is called. It is used to update the state based on the changes in the props.

          c. render():
          This method is used to render the component into the DOM.

          d. componentDidMount():
          This method is called after the component is mounted into the DOM. It is used to initialize the component with data from an external source.

- Updating:
  This phase is called when the component is being updated due to a change in the props or state.

          a. static getDerivedStateFromProps():
          This method is called before render() to update the state based on the changes in the props.

          b. shouldComponentUpdate():
          This method is used to determine whether the component should update or not.

          c. render():
          This method is used to render the updated component into the DOM.

          d. getSnapshotBeforeUpdate():
          This method is used to capture the current state of the component before the update.

          e. componentDidUpdate():
          This method is called after the component is updated. It is used to update the component with new data.

- Unmounting:
  This phase is called when the component is being removed from the DOM.

          a. componentWillUnmount():
          This method is used to remove any event handlers, timers or other resources created during the lifecycle of the component.

### Why do we use componentDidMount?

- componentDidMount() is a lifecycle method in React that is called after the component is mounted into the DOM. It is used to initialize the component with data from an external source or to perform any action that needs to be done only once after the component is mounted.

- Here are some reasons why we use componentDidMount():

- Fetching Data:
  When a component needs to fetch data from an API or from an external source, componentDidMount() is used to make the API call and update the state with the data.

- Setting up Timers:
  componentDidMount() can be used to set up timers or perform any other actions that need to be done periodically.

- Updating the DOM:
  componentDidMount() can be used to update the DOM with the data that is fetched from the API or from an external source.

- Event Listeners:
  componentDidMount() can be used to add event listeners to the component.

- Third-Party Libraries:
  componentDidMount() can be used to initialize third-party libraries that require access to the DOM.

- In general, componentDidMount() is used to initialize the component and its state, and to set up any required infrastructure for the component to work properly. It is a good place to perform any action that needs to be done only once after the component is mounted into the DOM.

### Why do we use componentWillUnmount? Show with example

- componentWillUnmount() is a lifecycle method in React that is called just before the component is unmounted from the DOM. It is used to perform any cleanup or teardown actions that need to be done before the component is removed from the DOM.

- Here are some examples of why we might use componentWillUnmount():

- Removing Event Listeners:
  When an event listener is added to a component, it is important to remove the listener when the component is unmounted. This prevents memory leaks and avoids errors caused by the listener attempting to interact with a non-existent component.

```
class MyComponent extends React.Component {
  handleClick = () => {
    // handle click event
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }

  render() {
    // render component
  }
}
```

- Cleaning up Timers:
  When a timer is set up in a component, it is important to clean up the timer when the component is unmounted. This prevents memory leaks and avoids errors caused by the timer attempting to interact with a non-existent component.

```
class MyComponent extends React.Component {
  timer = null

  componentDidMount() {
    this.timer = setInterval(() => {
      // handle timer event
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    // render component
  }
}
```

- Cleaning up Third-Party Libraries:
  When a third-party library is initialized in a component, it is important to clean up the library when the component is unmounted. This prevents memory leaks and avoids errors caused by the library attempting to interact with a non-existent component.

```
class MyComponent extends React.Component {
  chart = null

  componentDidMount() {
    this.chart = new Chart(this.canvas, {
      // chart configuration
    })
  }

  componentWillUnmount() {
    this.chart.destroy()
  }

  render() {
    return (
      <canvas ref={ref => this.canvas = ref} />
    )
  }
}
```

- In general, componentWillUnmount() is used to clean up any resources that were created during the lifecycle of the component. It is a good place to perform any action that needs to be done before the component is unmounted from the DOM.

### Why do we use super(props) in constructor?

- In React, the super(props) statement is used in a constructor to call the constructor of the parent class, which is usually React.Component, and pass it the props parameter. The props parameter contains the properties passed down to the component from its parent component.

- When you extend a class in JavaScript, you need to call super() in the constructor to initialize the parent class. If you do not call super() with the props parameter, the this.props object will be undefined in your component, and you will not be able to access the properties passed down to it from its parent.

- So, when you call super(props), you're passing the props parameter to the constructor of the parent class, which initializes the this.props object in your component. This allows you to access the properties passed down to your component from its parent through this.props.

- Here's an example of a component that extends React.Component and uses super(props) in the constructor:

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

- In this example, super(props) is used to initialize the parent React.Component class with the props parameter, and the component's state is initialized in the constructor.

### Why can't we have the callback function of useEffect async?

- In React, the useEffect hook is used to manage side effects in a functional component. It allows you to perform operations such as fetching data, subscribing to events, or updating the DOM when the component mounts or updates.

- The useEffect hook takes two parameters: a callback function and an array of dependencies. The callback function is executed after the component is mounted and after every update, unless the dependencies have not changed.

- You may be tempted to make the callback function an asynchronous function that returns a promise, but this is not allowed. The reason is that React expects the callback function to either return nothing or return a cleanup function. If you make the callback function async and it returns a promise, React will not know what to do with it, and this can lead to unpredictable behavior.

- Instead, if you need to perform an asynchronous operation in the callback function, you can create an asynchronous function inside the callback function and call it from there. For example:

```
useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    // Do something with the data
  }
  fetchData();
}, []);
```

- In this example, we define an asynchronous function fetchData inside the useEffect callback function and call it immediately. The useEffect hook has an empty dependency array, which means it will only run the callback function once when the component mounts. The fetchData function can perform asynchronous operations and update the component state as needed.

- In summary, you cannot make the useEffect callback function an async function because it expects a return value of either nothing or a cleanup function. If you need to perform asynchronous operations, you can define an asynchronous function inside the callback function and call it from there.
