import React from "react";
import { frameList } from "./data";

const CardCarousel = () => {
  const cards = frameList.map((item, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-content">
          <div key={index}>{item}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="carousel-container">{cards}</div>
    </div>
  );
};

export default CardCarousel;
