import React from "react";

import "./ratings.css";

const Ratings = ({ selectedNumber, setSelectedNumber }) => {
  return (
    <div className="ratingContainer">
      {[...Array(10).keys()].map((ele, index) => {
        const customStyle = {
          borderRight: index === 9 ? "1px" : "0",
          borderStyle: "solid",
          borderColor: "black",
        };
        return (
          <span
            className={`${index + 1 <= selectedNumber ? "selected" : "rate"}`}
            key={index}
            style={customStyle}
            onClick={() => setSelectedNumber(index + 1)}
          >
            {ele + 1}
          </span>
        );
      })}
    </div>
  );
};

export default Ratings;
