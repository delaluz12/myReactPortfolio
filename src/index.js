// allows for use of react library
import React from "react";

// react dom is virutal and compares diff from vdom vs reg dom
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import css library

// importing a component in source folder
import App from "./App";

// rendering an app component withing the div tag with id=root === think of 'App' as the top-level component
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
