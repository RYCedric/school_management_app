import React from "react";

const Card = ({ logo, number, title, color, bg }) => {
  color = { color: color, background: bg };
  return (
    <div className="card">
      <div className="logo" style={color}>
        {logo}
      </div>
      <div className="details">
        <h4>{title}</h4>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Card;
