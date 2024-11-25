import React from "react";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="section">
        <div>
          <p>Copyright ©greengear 2024 All rights reserved.</p>
        </div>
        <div className="socials">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
