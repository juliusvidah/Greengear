import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  // let [show, setShow] = useState(false);
  return (
    <div id="Nav">
      <nav>
        <ol>
          <li>
            <h3>GreenGear</h3>
          </li>

          <li className="center">
            <Link to="/">Home</Link>
            <Link to="Categories">Categories</Link>
            <Link to="HowItWorks">How it works</Link>
            <Link to="Contact">Contact</Link>
            <Link to="FAQ">FAQ</Link>
          </li>

          <li className="socials">
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731491815/Frame_4_ufyvju.png"
              alt="cart"
            />
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731491815/Vector_tnmnjw.png"
              alt="notification"
            />
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731491815/user-circle_ywwk2n.png"
              alt="user"
            />
            {/* <div className="relative">
            <img
              onClick={() => setShow((prev) => !prev)}
              src={cart}
              alt="cart"
            />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex justify-center items-center">
              {cart.length}
            </span>
          </div> */}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Nav;
