# Chapter 13 - Time for the test

## Notes

- React Testing Library is build using Jest behind the scene.
- https://testing-library.com/docs/react-testing-library/intro/
- why do we need test cases ? To make sure the exisitng functionality does not break when we add new features to our growing app.
- Test driven Development? We write test cases even before we write the code.
- headless browser? A headless browser is a web browser that operates without a user interface (UI) or graphical user interface (GUI).

```
Different Type of Testing
- Manual Testing? As the name suggests, it is done manuallyby a human, it is prone to more errors
- Automation Testing
    - Selenium Testing
- E2E Testing? Replacing the manual testing with code
- Unit testing? Testing small components of the App
- Integration Testing? test the integration between different components
- Regression Testing
- Smoke Testing
- Black Box Testing
```

- npm install --save-dev @testing-library/react jest
- after installing, configure jest by : npx jest --init
- which is used to create jest.config.js file
- npm install -D jest-environment-jsdom
- create **tests** folder and test files inside it
- Dunder methods are names that are preceded and succeeded by double underscores, hence the name dunder.
- need to do babel jest config also because we cannot use import statement inside plain js file.
- we can use babel.config.js and .babelrc(write JSON) file for configuration.

## Assignment

### What are different types for testing?

- There are various types of testing, some of which are:
- Unit Testing: It is the testing of individual units or components of a software application to ensure that each one works as expected.
- Integration Testing: It is the testing of the combined units or components to ensure that they work correctly together as a system.
- Functional Testing: It is the testing of the software application against its functional requirements to ensure that it meets the user's needs.
- Performance Testing: It is the testing of the software application to ensure that it performs well under different workloads and conditions.
- Security Testing: It is the testing of the software application to identify and fix security vulnerabilities to ensure that the data and system are protected from unauthorized access.
- Usability Testing: It is the testing of the software application to ensure that it is user-friendly and easy to use.
- Acceptance Testing: It is the testing of the software application to ensure that it meets the acceptance criteria and is ready for deployment.
- Regression Testing: It is the testing of the software application to ensure that the new changes or enhancements do not impact the existing functionality.
- Exploratory Testing: It is the testing of the software application without any predefined test cases to uncover new issues and improve the overall quality of the software.
- Compatibility Testing: It is the testing of the software application to ensure that it works correctly on different platforms, devices, and web browsers.

### What is Enzyme?

- Enzyme is a JavaScript testing utility for React that provides a simple and intuitive API for testing React components. It was developed by Airbnb and is now maintained by an open-source community.
- Enzyme allows you to test React components in isolation without the need for a browser or DOM. It provides several different types of testing utilities, including shallow rendering, full DOM rendering, and static rendering, that you can use to test various aspects of your components.
- Shallow rendering is a technique that allows you to render a component "one level deep" and test its behavior and output. This is useful when you want to test a component's behavior in isolation from its children components.
- Full DOM rendering, on the other hand, renders the entire component hierarchy, including all of its child components. This is useful when you want to test how the component behaves in a more realistic environment.
- Static rendering is a technique that allows you to render a component to a static HTML markup string. This is useful when you want to test how the component will be rendered on the server-side.
- Overall, Enzyme is a powerful testing utility for React that can help you write tests for your components that are easy to write, read, and maintain.

### enzyme vs react testing library

- Enzyme and React Testing Library are two popular testing frameworks used in the React ecosystem.
- Enzyme is a testing utility library for React that provides a set of APIs for interacting with React components. It offers a shallow rendering API that renders only the component being tested and none of its children, and a full rendering API that renders the entire component tree. Enzyme also provides a suite of assertions and utilities for interacting with components, including querying the component tree for specific nodes and simulating events.
- React Testing Library, on the other hand, is a lightweight testing library that focuses on testing a component as a user would interact with it. It provides a set of APIs that enable you to query the component tree by its role, label, or text content. This approach encourages developers to write tests that closely mimic the user's experience, which can help catch bugs that may be missed with other testing approaches.
- Both Enzyme and React Testing Library have their strengths and weaknesses, and the choice of which to use largely depends on the specific use case and personal preference. Enzyme is more powerful and flexible, while React Testing Library is simpler and easier to use for testing user interactions. Ultimately, it is recommended to use both frameworks together to ensure comprehensive testing coverage for your React application.

### What is Jest and why do we use it?

- Jest is an open-source JavaScript testing framework that is widely used for testing JavaScript code. It was developed by Facebook and is often used in conjunction with React and other modern JavaScript libraries and frameworks. Jest provides a simple, easy-to-use interface for writing and executing tests, making it a popular choice for developers.
- Here are some of the key features and benefits of using Jest:
- Test runner: Jest provides a test runner that can be used to execute tests in a variety of different environments, including Node.js, the browser, and even inside a continuous integration (CI) system.
- Assertion library: Jest includes its own assertion library that makes it easy to write tests and check for specific behaviors or conditions in your code.
- Mocking: Jest provides built-in support for mocking, which makes it easy to test code that has dependencies on other parts of your application or external libraries.
- Snapshot testing: Jest includes support for snapshot testing, which is a technique for capturing the output of a component or function and comparing it against a previously saved "snapshot".
- Code coverage: Jest includes built-in support for measuring code coverage, which can help you identify areas of your code that are not being tested.
- Overall, Jest is a powerful and flexible testing framework that makes it easy to write and execute tests for your JavaScript code. It is a great choice for developers who are looking for a simple, yet powerful testing solution.
