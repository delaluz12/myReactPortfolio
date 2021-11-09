import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons";

function Navigation() {
  return (
    <div className="container mx-auto flex justify-between">
      <nav className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "inflex-flex items-center py-6 px-3 mr-4 text-red-100  text-4xl font-bold cursive tracking-widest text-white"
              : "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-800 text-4xl font-bold cursive tracking-widest"
          }
        >
          Maria De La Luz
        </NavLink>
        <NavLink
          to="/aboutme"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700 "
              : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700 "
              : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700 "
              : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700 "
              : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          }
        >
          Contact
        </NavLink>
      </nav>


      <div className='inline-flex py-3 px-3 my-6'>
            <SocialIcon url='https://github.com/delaluz12' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
            <SocialIcon url='https://twitter.com/_MariaDeLaLuz_' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
            <SocialIcon url='https://www.linkedin.com/in/mariadllrm/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
      </div>
    </div>
  );
}

export default Navigation;
