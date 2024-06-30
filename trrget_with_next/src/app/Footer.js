import React from "react";
import Card from "./Card";
import { coursesList } from "./data";

const Courses = () => {
  // const cards = Array.from({ length: 10 }, (_, index) => ({
  //     title: `Card ${index + 1}`,
  //     content: `This is the content of card ${index + 1}.`
  //   }));

  return (
    <div className="card-grid">
      {coursesList.map((item, index) => {
        const { img, name } = item;
        return (
          <div className="card" key={index}>
            <img src={img} className="card-img" alt="" />
            <h2>{name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
