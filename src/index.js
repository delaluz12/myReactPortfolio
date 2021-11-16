// allows for use of react library
import React from "react";

// react dom is virutal and compares diff from vdom vs reg dom
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
//import css library
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// importing a component in source folder
import App from "./App";
import Footer from "./components/Footer"

// setting the const to what the anonymous fnc returns == the app component in the router wrapper making new component called wrapper
// const Wrapper = () => (<BrowserRouter><App/></BrowserRouter>);


//using call back fnc  to pass in the wrapper = wrappedComponent to the withFooter fnc and store the array of components to the array which will be passing in to the render
// const withFooter = WrappedComponent => () => [<WrappedComponent key='1' />, <Footer key='2'/>];


// rendering an app component withing the div tag with id=root === think of 'App' as the top-level component
// setting const to what fnc returns
// const WrapperWithFooter = withFooter(Wrapper);

ReactDOM.render(
  [<App key="1" />, <Footer key="2" />],
  document.getElementById("root")
);
