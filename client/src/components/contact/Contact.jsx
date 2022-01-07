import "./contact.css";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail} from "react-icons/md";
// import { GrMapLocation } from "react-icons/gr";
 import {FaMapMarkedAlt} from 'react-icons/fa'
import { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

export default function Contact() {
  const formRef = useRef();

  //state handling for when email is submitted
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    //prevents refresh on submit
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a26z2sx",
        "template_mxy7msf",
        formRef.current,
        "user_vSumsM3nvcD9W8g8n1R3B"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // clears input from form once email is submitted and complete
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title"> Let's Discuss Your Project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <BsTelephone  className="contact-icon" />
              {/* <img src= {BsTelephone} alt="" className="contact-icon" /> */}
              (612)250-5913
            </div>
            <div className="contact-info-item">
              <MdAlternateEmail  className="contact-icon" />
              marricomen@gmail.com
            </div>
            <div className="contact-info-item">
              <FaMapMarkedAlt  className="contact-icon" />
              Luck, Wisconsin, USA
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>What's your story?</b> Get in touch. Always freelancing if the
            right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333" }} placeholder="Message" name="message" rows="5" />
            <button type="submit">Submit</button>
            {done && 'Your message has been sent.'}
          </form>
        </div>
      </div>
    </div>
  );
}
