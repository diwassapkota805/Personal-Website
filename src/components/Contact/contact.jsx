import React, { useRef } from 'react'
import './contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7rajmsr', 'template_h4e1isu', form.current, 'CSNLMT7L5wpmGLQpr')
      .then((result) => {
          console.log(result.text);
          console.log("Email sent successfully!");
          window.alert("Email sent successfully!");
      }, (error) => {
          console.log(error.text);
          console.log("Email not sent!"); 
      });
  };

  return (
    <div id="contact">
      <h1 className="contact-title">Contact Me</h1>
      <span>Please fill out the form below to discuss any work opporutunities.</span>
      <form action="" className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" className="contact-form-text" placeholder="Name" name="user_name"/>
        <input type="email" className="contact-form-text" placeholder="Email" name="user_email"/>
        <textarea className="contact-form-message" placeholder="Message" name="message"></textarea>
        <button type="submit" value="Send" className="submitBtn">Submit</button>
      </form>
      
      <div className="links">
        < FaGithub className="icon" onClick={() => {
          window.open("https://github.com/diwassapkota805");
        }}/>
        < FaInstagram className="icon" onClick={() => {
          window.open("https://www.instagram.com/diwassapkota805/");
        }}/>
        < FaFacebook className="icon" onClick={() => {
          window.open("https://www.facebook.com/diwasmadristia.sapkota");
        }}/>
        < FaLinkedin className="icon" onClick={() => {
          window.open("https://www.linkedin.com/in/diwassapkota/");
        }}/>
        < FaTwitterSquare className="icon" onClick={() => {
          window.open("https://twitter.com/diwassapkota")
        }}/>

      </div>
      <footer className="footer">
          Copyright &#169; 2024 Diwas Sapkota. All right received.
      </footer> 
    </div>
  )
}

export default Contact
