import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

import resume from '../publicDocs/RicoMaria_Resume.pdf'

function Resume() {
  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center">
        <h1 className="topmargin text-center" style={{ marginBottom: "2rem" }}>
          Proficiencies
        </h1>
        <MDBCol md="6">
          <MDBListGroup flush>
            <MDBListGroupItem color="dark" className="text-center">
              Front-end
            </MDBListGroupItem>
            <MDBListGroupItem>HTML & CSS</MDBListGroupItem>
            <MDBListGroupItem>JavaScript</MDBListGroupItem>
            <MDBListGroupItem>Responsive Design</MDBListGroupItem>
            <MDBListGroupItem>React</MDBListGroupItem>
            <MDBListGroupItem>Bootstrap & MDBootstrap</MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
        <MDBCol md="6">
          <MDBListGroup flush>
            <MDBListGroupItem color="dark" className="text-center">
              Back-end
            </MDBListGroupItem>
            <MDBListGroupItem>APIs</MDBListGroupItem>
            <MDBListGroupItem>Node</MDBListGroupItem>
            <MDBListGroupItem>Express</MDBListGroupItem>
            <MDBListGroupItem>MySQL, Sequelize</MDBListGroupItem>
            <MDBListGroupItem>GraphQL</MDBListGroupItem>
            <MDBListGroupItem>MongoDB</MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
        <MDBCol md="6" className="m-4 d-flex justify-content-center">
          
          <h3>Download <a href={resume}>Resume</a></h3>
          {/* <MDBBtn
            outline
            rounded
            src='../publicDocs/RicoMaria_Resume.pdf'
            className=" hover-overlay"
            color="info"
            
            style={{ magin: 0, border: "none" }}
          >
            <h5 style={{ marginBottom: 0 }} >My Resume</h5>
            <div 
              className="mask"
              style={{
                background:
                  "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
                backgroundSize: "cover",
              }}
            ></div>
          </MDBBtn> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Resume;
