import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";

function Navigation() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" className="bg-dark fixed-top">
        <MDBContainer fluid>
          <MDBNavbarBrand >
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png"
              height="30"
              alt=""
              loading="lazy"
            />
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-danger"
              }
              
            >
              Maria De La Luz
            </NavLink> */}
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar  show={showNav}  >
            <MDBNavbarNav   >
            
              <MDBNavbarItem>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary nav-link"
                      : "text-danger nav-link"
                  }
                >
                  About Me
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary nav-link"
                      : "text-danger nav-link"
                  }
                >
                  Projects
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary nav-link"
                      : "text-danger nav-link"
                  }
                >
                  Resume
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary nav-link"
                      : "text-danger nav-link"
                  }
                >
                  Contact
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Navigation;
