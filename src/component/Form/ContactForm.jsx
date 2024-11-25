import React from "react";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./contactform.scss";

const ContactForm = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setIsAccepted(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isAccepted) {
      console.log("Form submitted:", inputs);
      alert("Thank you for contacting us!");
      // Add logic to send data to a server if needed
    }

    // Reload the page after 2 seconds
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  // const [textarea, setTextarea] = useState("Type your message");

  return (
    <div id="ContactForm">
      <div className="section1">
        <div className="div1">
          <div className="touch">
            <div>
              <h4 className="">Get in Touch</h4>
              <p>
                Reach out to us for any inquiries or support regarding our
                services.
              </p>
            </div>
          </div>

          <div className="first">
            <div className="">
              <img src={mail} alt="" />
            </div>
            <div>
              <p>info@greengear.com</p>
            </div>
          </div>

          <div className="second">
            <div className="">
              <img src={phone} alt="" />
            </div>
            <div>
              <p>(123) 456-7890</p>
            </div>
          </div>

          <div className="third">
            <div className="">
              <img src={location} alt="" />
            </div>
            <div>
              <p>123 Farm Lane, AgriCity, AG 12345</p>
            </div>
          </div>
        </div>

        {/* <div className="div2"> */}
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={inputs.firstName || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="name">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={inputs.lastName || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="address">
            <label className="">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="message">
            <label>Message</label>
            <textarea
              placeholder="Type your message"
              // input="text"
              // rows="3"
              name="textarea"
              value={inputs.textarea || ""}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="check-box">
            <label>
              <input
                type="checkbox"
                checked={isAccepted}
                onChange={handleCheckboxChange}
              />
              I accept the terms
            </label>
          </div>

          <button type="submit" disabled={!isAccepted}>
            Submit
          </button>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ContactForm;
