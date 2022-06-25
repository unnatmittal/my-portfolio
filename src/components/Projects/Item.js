import React from "react";
import "./style.css";

export const Item = (props) => {
  return (
    <div className="item">
      <div className="pic">        
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.img} className="i-pic" alt="no" />
          </a>
      </div>
      <div className="data">
        <h2>{props.head}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  );
};
