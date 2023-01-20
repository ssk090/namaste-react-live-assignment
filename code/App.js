import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h1">
    Hello World
  </h1>
);
const Heading2 = () => (
  <h1 id="title" key="h1">
    Hello World2
  </h1>
);

// Functional Component is a normal fucntion
const HeaderComponent = function () {
  return (
    <div>
      <h1>HeaderComponent</h1>
    </div>
  );
};
const HeaderComponent2 = () => {
  return (
    <div>
      {/* This is how you can call a nnormal component */}
      {heading}
      {/* You can call fucntional components like these as well */}
      {Heading2()}
      {/* This below line is called component composition  */}
      <Heading2 />
      <h1>HeaderComponent2</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2); //for React Element
root.render(<HeaderComponent2 />); // for functional component
