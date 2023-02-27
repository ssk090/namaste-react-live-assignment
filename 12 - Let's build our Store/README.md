# Chapter 11 - Let's build our Store

## Notes

- `Redux` : To manage our data layer of application
- we use useContext to avoid prop drilling
- we cannot direclty modify data in redux store, we can dispatch an action which calls a function which modifies the slice of the store.

```
 When we click on the button, it dispatch an action, which calls a reducer function, which updates the slice of the redux store. We use useSelector hook  to read data.
```

```
Create Store
- configureStore - RTK

Provide my store to the app
- <Provider store={store}/> - import from react-redux

Create Slice
- createSlice - RTK
createSlice({
    name:"",
    initialState:[],
    reducers:{
        addItem: (state,action)=>{
            state = action.payload
        }
    }
})
export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;

Put that slice into the store
configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
```

## Assignments

### useContext vs Redux.

- useContext and Redux are both tools used in React applications for managing state. However, they have different use cases and trade-offs.
- useContext is a React Hook that provides a way to pass data down the component tree without having to manually pass props. It allows components to consume data from a parent component, without the need for intermediate components to pass that data down explicitly. useContext is a simple and lightweight solution for small to medium-sized applications where the state is relatively simple and not too deeply nested.
- On the other hand, Redux is a state management library that provides a centralized store for state management. It offers a more structured and scalable way of managing state, especially for large and complex applications where the state is deeply nested and shared across many components. With Redux, state changes are managed through actions and reducers, making it easier to track and debug application state changes.
- In summary, if you have a relatively simple application with shallow nesting and you want a simple and lightweight solution, useContext might be a good choice. However, if you have a large and complex application with deep nesting and shared state, or if you want a more structured and scalable approach to state management, Redux might be a better choice.

### Advantage of using Redux Toolkit over Redux.

- Redux Toolkit is a set of utilities and best practices that simplifies the development of Redux applications. It provides several advantages over traditional Redux by reducing boilerplate code, improving developer experience, and reducing the likelihood of common mistakes. Here are some advantages of using Redux Toolkit over Redux:
- Simplified code: Redux Toolkit provides a set of pre-built functions and utilities that make it easier to write Redux code with fewer lines of code. It also eliminates the need for manually writing and configuring the Redux store, reducers, and actions.
- Immutable updates: Redux Toolkit uses the immer library under the hood, which allows for easier and more intuitive state updates. It simplifies the process of updating the state immutably, reducing the likelihood of errors.
- Built-in middleware: Redux Toolkit comes with a built-in middleware, including redux-thunk, redux-saga, and redux-observable, which are commonly used in Redux applications. This makes it easier to integrate these middleware libraries into your application without having to manually install and configure them.
- Better performance: Redux Toolkit optimizes the performance of Redux applications by reducing the amount of boilerplate code and reducing the number of unnecessary re-renders. It also enables better performance by automatically configuring the devtools extension to be more performant in production.
- Best practices: Redux Toolkit follows a set of best practices for writing Redux applications. This includes creating "slices" for related parts of the state, using the createSlice function to define reducers, and using createAsyncThunk for handling asynchronous actions. This helps developers write code that is easier to maintain and understand.
- Overall, Redux Toolkit provides a simpler and more efficient way to write and manage Redux applications, reducing the amount of boilerplate code and improving the developer experience. It is highly recommended for new projects and migrating existing projects to take advantage of its benefits.

### Explain Dispatcher.

- In Redux, a dispatcher is a function that is responsible for dispatching an action to the store. It is the only way to trigger a state change in the Redux store. The dispatcher function takes an action object as an argument, and it forwards the action object to the store.
- Here is an example of a simple dispatcher function in Redux:

```
const dispatcher = (action) => {
  store.dispatch(action);
};
```

- When a component needs to update the state in Redux, it creates an action object and passes it to the dispatcher function. The dispatcher function then forwards the action object to the store, which then updates the state according to the rules defined in the reducers.

```
const incrementCounter = () => {
  const action = { type: 'INCREMENT_COUNTER' };
  dispatcher(action);
};
```

- In the above example, the incrementCounter function creates an action object with a type property of 'INCREMENT_COUNTER'. It then passes this action object to the dispatcher function, which forwards it to the store. The store then updates the state according to the reducer function that handles the 'INCREMENT_COUNTER' action type.
- In summary, the dispatcher is a key component of the Redux architecture that is responsible for dispatching actions to the store. It enables components to update the state in a predictable way by enforcing a strict unidirectional data flow.

### Explain Reducer.

- In Redux, a reducer is a pure function that takes the current state and an action object as arguments, and returns a new state based on the action. The reducer function defines how the state should be updated in response to an action. It receives the current state and an action, and returns a new state object, which represents the next state of the application.
- Here's an example of a simple reducer function:

```
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    case 'DECREMENT_COUNTER':
      return state - 1;
    default:
      return state;
  }
};
```

- In the above example, the counterReducer function takes the current state (which is initialized to 0) and an action object as arguments. The reducer function uses a switch statement to handle different action types. If the action type is 'INCREMENT_COUNTER', the reducer returns a new state with the state value incremented by 1. If the action type is 'DECREMENT_COUNTER', the reducer returns a new state with the state value decremented by 1. If the action type is not recognized, the reducer returns the current state unchanged.
- Reducers must be pure functions, which means they should not modify the state object directly. Instead, they should create a new state object and return it. This ensures that the state is immutable and can be safely updated in a predictable way.
- In summary, the reducer function is a fundamental concept in Redux that defines how the state should be updated in response to an action. It takes the current state and an action as arguments and returns a new state object based on the action. By enforcing a strict unidirectional data flow, reducers enable developers to manage the state of a complex application in a predictable and scalable way.

### Explain slice.

- In Redux Toolkit, a slice is a set of predefined actions, action creators, and a reducer function that are all related to a specific feature or domain of your application state. A slice is essentially a mini Redux store that can be combined with other slices to form a larger Redux store.
- Slices provide a way to organize your Redux code by grouping together related parts of the state and the logic for updating them. Slices are defined using the createSlice function, which takes an initial state object, an object with a set of action types, and a set of reducer functions.
- Here's an example of a simple slice definition using createSlice:

```
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

- In the above example, the createSlice function is used to define a counter slice. The name property specifies the name of the slice, which is used to generate the action types. The initialState property defines the initial state of the slice, which is an object with a value property set to 0. The reducers property defines a set of reducer functions that handle different actions.
- The createSlice function automatically generates action types for each reducer function based on the name of the slice and the name of the reducer function. The export statement exports the action creators (increment and decrement) and the reducer function (counterSlice.reducer) for use in other parts of the application.
- In summary, a slice in Redux Toolkit is a way to organize related parts of the state and the logic for updating them. Slices are defined using the createSlice function, which generates a set of action types, action creators, and reducer functions. By using slices, you can simplify your Redux code and make it easier to reason about.

### Explain Selector.

- In Redux, a selector is a function that extracts a specific piece of data from the Redux store state. Selectors are used to compute derived data from the store, or to filter and transform the data before it is passed to a component.
- Selectors are useful in complex Redux applications because they allow you to decouple the data retrieval logic from the components. Instead of passing the entire store state to a component and letting the component extract the relevant data, you can use selectors to compute the derived data and pass only the relevant data to the component. This can help improve performance and simplify the component code.
- Here's an example of a simple selector function:

```
const selectCounterValue = (state) => state.counter.value;
```

- In the above example, the selectCounterValue selector function takes the Redux store state as an argument and returns the value property of the counter slice. The state argument is the entire Redux store state, but the selector only extracts the relevant part of the state that it needs.
- Selectors can also be composed to create more complex selectors that combine multiple pieces of data from the store. Here's an example of a composed selector that calculates the total value of two counters:

```
const selectTotalCounterValue = (state) =>
  selectCounterValue(state) + selectAnotherCounterValue(state);
```

- In the above example, the selectTotalCounterValue selector function composes two other selectors (selectCounterValue and selectAnotherCounterValue) to compute the total value of two counters.
- In summary, selectors are functions that extract a specific piece of data from the Redux store state. They allow you to decouple the data retrieval logic from the components and compute derived data from the store. Selectors can also be composed to create more complex selectors that combine multiple pieces of data from the store.

### Explain createSlice and the configuration it takes.

- createSlice is a function provided by Redux Toolkit that simplifies the process of creating Redux stores by generating a set of action types, action creators, and a reducer function. Here's an overview of the configuration options that createSlice takes:

```
createSlice({
  name: string,        // The name of the slice, used to generate action types
  initialState: any,   // The initial state of the slice
  reducers: object,    // An object containing reducer functions
  extraReducers: object // An object containing additional reducer functions
})
```

- name: This is a required string that specifies the name of the slice. It is used to generate the action types for the slice, so it should be unique across your Redux store. If you have multiple slices in your store, each one should have a unique name.
- initialState: This is the initial state of the slice. It can be any valid JavaScript value, such as an object, array, string, number, or boolean.
- reducers: This is an object that contains one or more reducer functions. Each reducer function is associated with an action type that is automatically generated by createSlice. The keys of the reducers object are the action type names, and the values are the reducer functions. The reducer functions take the current state of the slice and an action object, and return the new state of the slice.
- extraReducers: This is an optional object that contains additional reducer functions that can handle actions that are not associated with any of the action types generated by createSlice. This can be useful if you want to handle actions that are dispatched by other parts of your application or by middleware.
- Here's an example of how to use createSlice to define a counter slice:

```
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
```

- In the above example, createSlice is used to define a counter slice with an initial state of 0. The reducers object contains two reducer functions, one for incrementing and one for decrementing the counter. The createSlice function generates the action types and action creators for these reducers automatically.
- The increment and decrement action creators are exported from the slice and can be used in other parts of the application to dispatch actions. The counterSlice.reducer function is also exported and can be used as the reducer function for the counter slice in a Redux store.

## Important
![image](https://user-images.githubusercontent.com/22127725/221651839-7d98abec-449b-4941-ac47-814beaab368e.png)

