import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { style: { color: "blue" } },
  "Heading"
);
const heading2 = React.createElement(
  "h2",
  { style: { color: "red" } },
  "Heading2"
);
//   For Nested Elements
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
console.log("🚀 ~ file: index.html:36 ~ heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);
root.render(container);
