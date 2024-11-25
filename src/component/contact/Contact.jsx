import React from "react";
import ContactForm from "../Form/ContactForm";
import "./contact.scss";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="section">
        <div className="div1">
          <h2>Connect With GreenGear</h2>
          <p>
            We are here to assist you with all your agricultural equipment
            rental needs. Reach out to us for inquiries, support, or to learn
            more about our services.
          </p>

          <div>
            <button>Get Support</button>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
