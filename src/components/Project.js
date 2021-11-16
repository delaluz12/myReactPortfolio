import React from "react";

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

function Project({projectData}) {
   // console.log(projectData);
  return (
    <>
    { projectData.map((project, index) =>(
       
      <MDBCol md="4" key={index}>
        <MDBCard className="mb-3">
          <MDBCardImage
            position="top"
            src={project.src}
            alt="..."
          />

          <MDBCardBody>
            <MDBCardTitle>
              <medium className="align-text-top">{project.name}</medium>{" "}
              <MDBBtn
                size="md"
                floating
                style={{ backgroundColor: "#ac2bac" }}
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="align-middle"
              >
                <MDBIcon far icon="play-circle" />
              </MDBBtn>
            </MDBCardTitle>

            <MDBCardText>{project.description}</MDBCardText>
            <MDBCardText>
              <MDBBtn
                size="sm"
                floating
                style={{ backgroundColor: "#ac2bac" }}
                href={project.repoLink}
                className="align-top"
                target="_blank"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>{" "}
              <small className="text-muted align-baseline">
                <a href="https://delaluz12.github.io/ActGen/" target="_blank">
                  github repo information/link
                </a>
              </small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
     ))}
    </>
  );
}

export default Project;
