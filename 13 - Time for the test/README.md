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
