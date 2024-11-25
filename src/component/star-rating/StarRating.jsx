import React, { useState } from "react";
import "./Star-rating.scss";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div id="StarRating">
      <div className="star-rating">
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? "star filled" : "star"}
            onClick={() => handleRating(index)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
