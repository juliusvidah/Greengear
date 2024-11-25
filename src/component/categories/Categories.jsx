import React from "react";
import "./categories.scss";

const Categories = () => {
  return (
    <div id="Categories">
      <div className="section">
        <div className="div1">
          <h4>Tractors</h4>
          <p>Tillage Equipment</p>
          <p>Harvesting Equipment</p>
          <p>Irrigation Equipment</p>
          <p>Soil Preparation</p>
          <p>Grain Storage</p>
          <p>Utility Vehicles</p>
          <p>Precision Farming</p>
        </div>

        <div className="div2">
          <div className="empower">
            <h5>Empowering Your Industry with Precision Machinery</h5>
            <p>
              Unleash the Power of Innovation with GreenGear, your premier
              destination for cutting-edge machinery and equipment.
            </p>
          </div>

          <div className="image6">
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731736410/image_6_vadiss.png"
              alt="tractor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
