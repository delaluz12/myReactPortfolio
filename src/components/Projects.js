import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

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

function Projects() {
  const projects = [
    {
      name: "projectname",
      repoLink: "repoURL",
      description: "short description here",
      liveLink: "deployedLink",
      source: "place imported object here...maybe",
    },
    {
      name: "projectname",
      repoLink: "repoURL",
      description: "short description here",
      liveLink: "deployedLink",
      source: "srcLink",
    },
  ];

  return (
    <main className="">
      <MDBContainer fluid className="">
        <MDBRow>
          <h1 className="topmargin text-center">My Projects</h1>
          <MDBCol md="4">
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
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </main>
  );
}

export default Projects;
