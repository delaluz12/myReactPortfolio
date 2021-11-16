import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import actgen from '../images/actGen.jpg'
import backend from '../images/backend.jpg'
import noteTaker from '../images/noteTaker.jpg'
import planner from '../images/planner.jpg'
import techBlog from '../images/techBlog.jpg'
import weather from '../images/weather.jpg'
import welcomeNeighbor from '../images/welcomNeighbor.jpg'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

import Project from './Project'

function Projects() {
  const projects = [
    {
      name: "ActGen",
      repoLink: "https://github.com/delaluz12/ActGen",
      description: "A fun activity generating application",
      liveLink: "https://delaluz12.github.io/ActGen/",
      image: {actgen},
      imgName: 'actgen',
      src: '/myReactPortfolio/static/media/actGen.0284bdcd.jpg'
    },
    {
      name: "Day Scheduler",
      repoLink: "https://github.com/delaluz12/eCommerceBackEnd",
      description: "A simple easy to use backend template for eCommerce database",
      liveLink: "https://www.youtube.com/watch?v=2PRolV6HDaY&ab_channel=MariaRico",
      image: {backend},
      src: '/myReactPortfolio/static/media/backend.9cdb9629.jpg'
    },
    {
      name: "Note Taker",
      repoLink: "https://github.com/delaluz12/noteTaker",
      description: "A useful note taking desktop application for record keeping or brainstorming",
      liveLink: "https://notetaker-delaluz12.herokuapp.com/",
      image: {noteTaker},
      src: '/myReactPortfolio/static/media/noteTaker.efc687dc.jpg'
    },
    {
      name: "Day Scheduler",
      repoLink: "https://github.com/delaluz12/Day-Scheduler",
      description: "An easy to use daily planner",
      liveLink: "https://delaluz12.github.io/Day-Scheduler/",
      image: {planner},
      src: '/myReactPortfolio/static/media/planner.435934a6.jpg'
    },
    {
      name: "Weather Dashboard",
      repoLink: "https://github.com/delaluz12/Weather-Dashboard",
      description: "A useful weather dashboard app for desktop",
      liveLink: "https://delaluz12.github.io/Weather-Dashboard/",
      image: {weather},
      src: '/myReactPortfolio/static/media/weather.e317f62f.jpg'
    },
    {
      name: "Welcome Neighbor",
      repoLink: "https://github.com/delaluz12/Welcome-Neighbor",
      description: "A useful Community app for Users to connect with those neighbors in close proximity",
      liveLink: "https://hello-neighbor.herokuapp.com/",
      image: {welcomeNeighbor},
      src: '/myReactPortfolio/static/media/welcomNeighbor.f325c6cb.jpg'
    },
  ];

  return (
    <main className="">
      <MDBContainer className="mb-5">
        <MDBRow>
          
          <h1 className="topmargin text-center">My Projects</h1>
          <Project projectData={projects}/>
          {/* <MDBCol md="4">
            <MDBCard className="mb-3">
              <MDBCardImage
                position="top"
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg"
                alt="..."
              />

              <MDBCardBody>
                <MDBCardTitle>
                  <medium className="align-text-top">Project Name</medium>{" "}
                  <MDBBtn
                    size="md"
                    floating
                    style={{ backgroundColor: "#ac2bac" }}
                    href="https://delaluz12.github.io/ActGen/"
                    target="_blank"
                    rel="noreferrer"
                    className="align-middle"
                  >
                    <MDBIcon far icon="play-circle" />
                  </MDBBtn>
                </MDBCardTitle>

                <MDBCardText>Description of project</MDBCardText>
                <MDBCardText>
                  <MDBBtn
                    size="sm"
                    floating
                    style={{ backgroundColor: "#ac2bac" }}
                    href="https://delaluz12.github.io/ActGen/"
                    className="align-top"
                    target="_blank"
                  >
                    <MDBIcon fab icon="github" />
                  </MDBBtn>{" "}
                  <small className="text-muted align-baseline">
                    <a
                      href="https://delaluz12.github.io/ActGen/"
                      target="_blank"
                    >
                      github repo information/link
                    </a>
                  </small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-3">
              <MDBCardImage
                position="top"
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg"
                alt="..."
              />

              <MDBCardBody>
                <MDBCardTitle>
                  Project Name{" "}
                  <a
                    className=""
                    href="https://delaluz12.github.io/ActGen/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconContext.Provider
                      value={{
                        color: "pink",
                        size: "3rem",
                        className: " hover:opacity-50 ",
                      }}
                    >
                      <AiFillPlayCircle />
                    </IconContext.Provider>
                  </a>
                </MDBCardTitle>

                <MDBCardText>Description of project</MDBCardText>
                <MDBCardText>
                  <MDBBtn
                    size="sm"
                    floating
                    style={{ backgroundColor: "#ac2bac" }}
                    href="https://delaluz12.github.io/ActGen/"
                  >
                    <MDBIcon fab icon="github" />
                  </MDBBtn>
                  <small className="text-muted">
                    <a href="https://delaluz12.github.io/ActGen/">
                      github repo information/link
                    </a>
                  </small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-3">
              <MDBCardImage
                position="top"
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg"
                alt="..."
              />

              <MDBCardBody>
                <MDBCardTitle>
                  Project Name{" "}
                  <a
                    className=""
                    href="https://delaluz12.github.io/ActGen/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconContext.Provider
                      value={{
                        color: "pink",
                        size: "3rem",
                        className: " hover:opacity-50 ",
                      }}
                    >
                      <AiFillPlayCircle />
                    </IconContext.Provider>
                  </a>
                </MDBCardTitle>

                <MDBCardText>Description of project</MDBCardText>
                <MDBCardText>
                  <MDBBtn
                    size="sm"
                    floating
                    style={{ backgroundColor: "#ac2bac" }}
                    href="https://delaluz12.github.io/ActGen/"
                  >
                    <MDBIcon fab icon="github" />
                  </MDBBtn>
                  <small className="text-muted">
                    <a href="https://delaluz12.github.io/ActGen/">
                      github repo information/link
                    </a>
                  </small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </main>
  );
}

export default Projects;
