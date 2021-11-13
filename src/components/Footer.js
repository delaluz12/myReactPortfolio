import React from "react";
import {
  MDBFooter,
  
} from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <MDBFooter className="myfooter mt-auto py-3  " style={{backgroundColor: '#e3f2fd'}}>
      <div className='container'>
      <div className="pt-2 text-center" >
        <SocialIcon
          url="https://github.com/delaluz12"
          className=""
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35, color: 'lightblue' }}
        />
        <SocialIcon
          url="https://twitter.com/_MariaDeLaLuz_"
          className=""
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35,  }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/mariadllrm/"
          className=""
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>

      <div
        className="text-center p-3"
        
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-light" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      </div>
    </MDBFooter>
  );
}

export default Footer;
