# Chapter 11 - Data is the new Oil

## Notes and Assignment

- `Props Drilling:` When you paas some data as a prop from one component to another component as a prop, and this chain continues then it is called props drilling.
- Prop drilling is a term used in React programming to describe the process of passing data from a component to its descendant components through props, even if the intermediate components do not need that data.
- In React, data typically flows from a parent component to its child components through props. However, sometimes a child component needs to access data that is several levels up in the component tree. In this case, the data has to be passed through all the intermediate components via props, even if they do not need to use that data themselves. This is known as prop drilling.
- Prop drilling can make the code more complex and difficult to maintain, especially as the component tree grows larger and more complex. To avoid prop drilling, you can use other state management techniques such as Redux, Context API, or React's built-in useReducer hook. These tools allow you to manage the state of your application in a centralized way, making it easier to access and update the data you need across different components without having to pass it down via props.

- `Lifting up the state:` Lifting state up is a common pattern in React that involves moving the state from a lower-level component in the component tree to a higher-level component that's a common ancestor of the components that need access to the state.

By lifting state up, you can make the state accessible to multiple components without having to pass it down through props (which can lead to prop drilling, as I explained in my previous answer). This can simplify your code and make it more maintainable, especially as your component tree grows larger and more complex.

Here's an example of how lifting state up works in practice:

Suppose you have a component tree with three components: Parent, Child1, and Child2. Both Child1 and Child2 need to access the same piece of state. One way to achieve this is to define the state in Child1 and pass it down to Child2 through props. However, this can lead to prop drilling if there are other components between Child1 and Child2 that don't need access to the state.

To avoid prop drilling, you can lift the state up to Parent, which is a common ancestor of both Child1 and Child2. In Parent, you define the state and pass it down to Child1 and Child2 as props. Both Child1 and Child2 can then access and update the state directly, without having to pass it down through intermediate components.

Here's an example of what the code might look like:

```
function Parent() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <Child1 count={count} />
      <Child2 count={count} onIncrement={incrementCount} />
    </>
  );
}

function Child1({ count }) {
  return <p>The count is {count}.</p>;
}

function Child2({ count, onIncrement }) {
  return (
    <div>
      <p>The count is {count}.</p>
      <button onClick={onIncrement}>Increment count</button>
    </div>
  );
}
```

- In this example, Parent defines the state (count) and passes it down to Child1 and Child2 as props. Child1 displays the count, while Child2 displays the count and provides a button to increment it. When the button is clicked, Child2 calls the onIncrement function passed down from Parent, which updates the state in Parent. The updated state is then passed back down to both Child1 and Child2, causing them to re-render with the new count value.
- useContext is just like useState for the whole application.

### What is Context Provider and Context Consumer?

- Context Provider and Context Consumer are components in the React JavaScript library that allow data to be passed down from a parent component to its children, even if the children are not direct descendants of the parent.
- The Context Provider is a component that provides data to its child components, which can be accessed through a Context Consumer. It is responsible for defining the data that will be made available to its children and rendering them.

### If you don’t pass a value to the provider does it take the default value?

- Yes, it will take the default value.
