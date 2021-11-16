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
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
        <MDBCol md="6">
          <MDBListGroup flush>
            <MDBListGroupItem color="dark" className="text-center">
              Back-end
            </MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
        <MDBCol md="6" className="m-4 d-flex justify-content-center">
          <MDBBtn
            outline
            rounded
            className=" hover-overlay"
            color="info"
            style={{ magin: 0, border: "none" }}
          >
            <h5 style={{ marginBottom: 0 }}>My Resume</h5>
            <div
              className="mask"
              style={{
                background:
                  "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
                backgroundSize: "cover",
              }}
            ></div>
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Resume;
