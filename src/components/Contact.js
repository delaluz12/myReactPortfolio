import React, { useState } from "react";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInputGroupText,
  MDBInputGroup,
  MDBValidation,
  MDBBtn,
} from "mdb-react-ui-kit";

function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBContainer>
      <div className="topmargin text-center">Let's Connect!</div>
      <MDBRow className="m-4">
        {/* <MDBCol> */}
          <MDBValidation>
            <form>
              <div className="col-12 py-2">
                <MDBInput
                  label="Name"
                  id="typeText"
                  type="text"
                  className="m-2"
                  name="name"
                  value={formValue.name}
                  onChange={onChange}
                  required
                  validation="name required"
                  invalid
                />
              </div>

              <div className="col-12 py-2">
                <MDBInput
                  label="Email input"
                  id="typeEmail"
                  type="email"
                  className="m-2"
                  value={formValue.email}
                  onChange={onChange}
                  required
                  name="email"
                  validation="email required"
                  invalid
                />
              </div>
              <div className="col-12 py-2">
                <MDBInput
                  label="Message"
                  id="textAreaExample"
                  textarea
                  rows={4}
                  className="m-2"
                  required
                  value={formValue.message}
                  onChange={onChange}
                  name="message"
                  validation="need to add message"
                  invalid
                />
              </div>
            </form>
            <div className="col-12 py-2 d-flex justify-content-center">
              <MDBBtn type="submit">Submit form</MDBBtn>
            </div>
            <div className="text-center pt-4">reach me at c12vida@gmail.com</div>
          </MDBValidation>
        {/* </MDBCol> */}
      </MDBRow>
    </MDBContainer>
  );
}

export default Contact;
