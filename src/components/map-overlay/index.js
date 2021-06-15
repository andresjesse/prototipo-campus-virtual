import React from "react";

import "./styles.css";

export default function MapOverlay(props) {
  return (
    <div
      className={`map-overlay ${props.building}`}
      onMouseEnter={props?.onMouseEnter}
      onMouseLeave={props?.onMouseLeave}
      onClick={props?.onClick}
    ></div>
  );
}
