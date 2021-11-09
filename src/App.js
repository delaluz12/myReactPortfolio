import React from "react";
import { Route, Routes } from "react-router-dom";
// importing components

import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Header from "./components/Header";

// returns the <'comp'/> component to top-level 'App' component
function App() {
  return (
    <div>
      <Header />

      {/* iniate the switch which will enable Users to click the links to take them to appropriate page based on what they clicked */}
      <Routes>
        {/* the routes we want Users to be able to navigate to ===Aboutme/Home, Projects, Resume, Contact, */}
        {/* <Route component={About} path='/' exact /> */}
        <Route element={<About />} path="/" />
        <Route element={<About />} path="aboutme" />
        <Route element={<Projects />} path="projects" />
        <Route element={<Resume />} path="resume" />
        <Route element={<Contact />} path="contact" />
      </Routes>
    </div>
  );
}

export default App;
