
// import { Route, Routes } from "react-router-dom";
// importing components
// import Navigation from "./components/oldComponents/Navigation";
// import Contact from "./components/oldComponents/Contact";
// import About from "./components/oldComponents/About";
// import Projects from "./components/Projects";
// import Resume from "./components/oldComponents/Resume";
// import Header from "./components/Header";
// import Home from "./components/oldComponents/Home.js.js";
// import Footer from "./components/Footer";

//REDESIGN
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Contact from './components/contact/Contact';
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context"; 
import {useContext} from 'react';


// returns the <'comp'/> component to top-level 'App' component
function App() {

  const theme = useContext(ThemeContext)

  const darkMode = theme.state.darkMode;

  // const [currentPage, setCurrentPage] = useState("Home");
  // page rendering fnc
  // const renderPage = () => {
  //   if (currentPage === "Home") {
  //     return <Home />;
  //   }
  //   if (currentPage === "About") {
  //     return <About />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   if (currentPage === "Projects") {
  //     return <Projects />;
  //   }
  //   return <Resume/>;
  // };
  // handles the page change
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    // <div className="content">
    //   <Header />
    //   <Navigation
    //     currentPage={currentPage}
    //     handlePageChange={handlePageChange}
    //   />
    //   {/* iniate the switch which will enable Users to click the links to take them to appropriate page based on what they clicked */}
    //   {/* <Routes> */}
    //   {/* the routes we want Users to be able to navigate to ===Aboutme/Home, Projects, Resume, Contact, */}
    //   {/* <Route component={About} path='/' exact /> */}
    //   {/* <Route element={<Home />} path="/" />
    //     <Route element={<About />} path="aboutme" />
    //     <Route element={<Projects />} path="projects" />
    //     <Route element={<Resume />} path="resume" />
    //     <Route element={<Contact />} path="contact" /> */}
    //   {/* </Routes> */}

      
    //   {renderPage()}
    // </div>
    <div style={{backgroundColor:darkMode ? '#222' : 'white' , color:darkMode? "white" : 'black'}}> 
      
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
      
    </div>
  );
}

export default App;
