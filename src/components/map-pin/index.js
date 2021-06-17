import React from "react";

import "./styles.css";

export default function MapPin(props) {
  return (
    <div className={`pin-container ${props.building}`}>
      <div className={`pin ${props.isActive ? "active" : ""}`}>
        <div className="pin-text">{props.text}</div>
        <div className={`pin-letter ${props.isActive ? "" : "active"}`}>
          {props.letter}
        </div>
      </div>
      <div className="pin-stick"></div>
    </div>
  );
}
