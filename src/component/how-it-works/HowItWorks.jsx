import React from "react";
import "./howitworks.scss";

const HowItWorks = () => {
  return (
    <div id="HowItWorks">
      <div className="section">
        <div className="div1">
          <h2>Effortless Equipment Rentals</h2>
          <p>
            Discover how easy it is to rent the agricultural equipment you need.
            Our platform offers a seamless booking experience, ensuring you have
            access to essential machinery when you need it.
          </p>

          <div>
            <button>Rent Now</button>
          </div>
        </div>

        <div className="div2">
          <div className="step">
            <h2>Step-by-Step Guide to Booking Equipment</h2>
            <p>
              Renting equipments with GreenGear is simple and efficient. Follow
              these steps to secure the machinery you need:
            </p>

            <p>
              Search for the equipment you need using our user-friendly filters.
            </p>
            <p>Select the equipment and check availability in real-time.</p>

            <p>Proceed to secure renting with our safe payment system</p>
          </div>

          <div className="image3">
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731742431/image_5_ynwaix.png"
              alt=""
            />
          </div>
        </div>

        <div className="div3">
          <div>
            <h2>Track Equipment Availability Instantly</h2>
          </div>

          <div className="explore">
            <p>
              Stay ahead with our real-time tracking system that provides
              up-to-the-minute information on available agricultural equipment.
              Easily view equipment names, statuses, and rental options,
              ensuring you have access to the machinery you need, when you need
              it.
            </p>

            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
