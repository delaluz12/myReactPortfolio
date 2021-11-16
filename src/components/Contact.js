import React from "react";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInputGroupText,
  MDBInputGroup,
} from "mdb-react-ui-kit";



function Contact() {
  return (
    <MDBContainer>
      <div className="topmargin text-center">Let's Connect!</div>
      <MDBRow className="m-4">
        <MDBCol>
          <form>
            <MDBInput label="Name" id="typeText" type="text" className="m-2" />

            <MDBInput
              label="Email input"
              id="typeEmail"
              type="email"
              className="m-2"
            />
            <MDBInput
              label="Message"
              id="textAreaExample"
              textarea
              rows={4}
              className="m-2"
            />
          </form>
          <div className="text-center">reach me at c12vida@gmail.com</div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Contact;
