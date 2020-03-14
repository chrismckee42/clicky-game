import React from "react";
import "./style.css";

function Card(props) {
  console.log('props', props.img)
  return (
    <div className="card">
      <img src={props.img} alt="hi" />
    </div>
  );
}

export default Card;
