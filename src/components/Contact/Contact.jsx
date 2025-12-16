import React from "react";
import "./Contact.css";
import theam from "../../assets/theam.png";
import call from "../../assets/call.png";
import location from "../../assets/location.png";
import mail from "../../assets/mail.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b246fabd-9879-421a-9db8-1f543c974ff1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theam} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'am currently available take on new projects and internships,so
            feel free to contact
          </p>
          <div className="contact-detail">
            <img src={mail} alt="" />
            <p>betelhemmelesse70@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={call} alt="" />
            <p>+251913816595</p>
          </div>
          <div className="contact-detail">
            <img src={location} alt="" />
            <p>A.A Ethiopia</p>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor=""> Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your meassage"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
