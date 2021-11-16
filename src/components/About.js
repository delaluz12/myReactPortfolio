import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import headshot from "../headshot.jpg";
import headshot2 from "../images/IMG_3989.jpg";

function About() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard
            style={{
              maxWidth: "1200px",
              marginTop: "9rem",
              marginBottom: "5rem",
            }}
            className=""
          >
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src={headshot2}
                  alt="..."
                  fluid
                  style={{ padding: "2rem" }}
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody style={{ padding: "1rem" }}>
                  <MDBCardTitle>Hello 🌎. I am Maria De La Luz.</MDBCardTitle>
                  <MDBCardText  className='text-wrap fw-lighter'>
                    I am looking to merge my background and skillsets with those
                    in technology and environmental sectors, including; but not
                    limited to web development and permaculture. Transitioning
                    from diligent Research Associate to creative and dependable
                    Entry Level Web Developer. My professional background is
                    well-versed in various industries including; biotechnology,
                    life sciences, R&D, law, customer service, administration
                    and support services. <br></br><p></p> Throughout my site you will find links
                    and access points to my work in Full-Stack Web Development
                    as well as my resume with other professional experience. In
                    addition to my work, you will also find ways to connect with
                    me. Please do not hestiate to reach out.
                  </MDBCardText>
                  <MDBCardText>
                    <p className="text-muted lh-1 font-monospace fw-light" style={{fontSize: '0.65rem'}}>
                    The cutie pie in the picture with me is my fur-baby CaLu - she's a boxer/terrier mix 🐶. She cries with excitment when approacing a Starbucks because she knows: Starbucks = pupcup 🍦
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default About;
