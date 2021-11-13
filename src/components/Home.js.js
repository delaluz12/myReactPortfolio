import React from "react";
import image from "../_DSC0207.jpg";
import { MDBTypography } from "mdb-react-ui-kit";
import "./home.css";
import "../index.css";

function Home() {
  return (
    <div
      className="p-5 text-center bg-image homeImg"
      id="headImg"
      // style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 400 }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <MDBTypography className="display-1 pb-3 mb-3 cursive">
              Hello World!
            </MDBTypography>
            {/* <h4 className="mb-3">Subheading</h4>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Call to action
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
