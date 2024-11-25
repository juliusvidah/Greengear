import React from "react";
import "./recently.scss";
import { Image } from "cloudinary-react";
import { recently } from "./recently.json";
import vector from "../../assets/vector.svg";
import cart from "../../assets/cart.svg";

const Recently = () => {
  return (
    <div id="Recently">
      <div className="section">
        <h2>Recently Viewed</h2>
        <ul>
          {recently.map((each) => (
            <div className="relative" key={each.id}>
              <Image
                cloudName={each.cloudName}
                publicId={each.publicId}
                loading="lazy"
                className="relative"
              />
              {/* {each.publicId && (
                <div className="cart">
                  <h5>
                    <img src={cart} alt="cart" />
                  </h5>
                </div>
              )} */}
              <div className="parts">
                <h3>{each.name}</h3>
                <p> {each.description}</p>
                <div className="flex">
                  <div>
                    <img src={vector} alt="vector" />
                  </div>

                  <div>
                    <p> {each.tags}</p>
                  </div>
                </div>

                <div className="flex2">
                  <div>
                    <h6>{each.price}</h6>
                  </div>

                  <div>
                    <button className="font-semibold"> {each.button}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recently;
