import React from 'react';
import "./Card.css";
import mern from "../../assets/img1.jpg";

function Card({ title , image  }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default Card;
