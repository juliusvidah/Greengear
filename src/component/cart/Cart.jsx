import React, { useState } from "react";
import "./cart.scss";
import light from "../../assets/light.svg";
import Recently from "../recently/Recently";

const Cart = () => {
  const [quantity, setQuantity] = useState(1); // Initial quantity
  const pricePerDay = 30000; // Price per day
  const subTotal = quantity * pricePerDay; // Calculate subtotal

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div id="Cart">
      <div className="group">
        <div className="image">
          <div className="delete">
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731492290/delete-02_enm4vo.png"
              alt="delete"
            />
          </div>

          <div className="tractor">
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731352232/image_1_zvyvst.png"
              alt="tractor"
              loading="lazy"
            />
          </div>

          <div className="img">
            <h5>John Dey Tractor</h5>
            <h6>₦{pricePerDay.toLocaleString()}/day</h6>

            <div className="quantity">
              <p>Quantity</p>

              <div className="increase">
                <div className="span">
                  <span>
                    <button onClick={handleDecrease} className="but1">
                      -
                    </button>
                  </span>
                  <span>{quantity}</span>
                  <span>
                    <button onClick={handleIncrease} className="but2">
                      +
                    </button>
                  </span>
                </div>

                <div>
                  <p>₦{subTotal.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="duration">
              <p>Duration </p>

              <div className="light">
                <div className="cal">
                  <div>
                    <img src={light} alt="calender" />
                  </div>
                  <div>From</div>
                </div>
                <div>-</div>
                <div className="cal">
                  <div>To</div>
                  <div>
                    <img src={light} alt="calender" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="summary">
          <h5>Cart Summary</h5>

          <div className="sub">
            <div>
              <p>Sub-Total</p>
            </div>
            <div>₦{subTotal.toLocaleString()}</div>
          </div>
          <p>Delivery fees not included yet</p>

          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>

      <Recently />
    </div>
  );
};

export default Cart;
