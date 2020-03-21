import React from "react";
import "./style.css";

function Card(props) {
  console.log('props', props.img)
  return (
    <div className="card flex-row flex-wrap">
      <img src={props.img} alt="hi" key={props.key} onClick={props.onClick} />
    </div>
  );
}

export default Card;
