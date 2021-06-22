import React from "react";

import logo from "./logo.png";

import icMenu from "../../assets/icons/ic-menu.png";
import icArrow from "../../assets/icons/ic-arrow.png";

import "./styles.css";

const icons = {
  default: icMenu,
  arrow: icArrow,
};

export default function TopMenu(props) {
  return (
    <div className="topmenu global-shadow">
      <img src={logo} className="logo" alt="logo do evento" />

      <div className="title">{props.title}</div>

      <div className="right-options">
        <div className="divider"></div>

        <img
          src={icons[props.icon]}
          alt="icone do menu"
          className="ic-menu"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}
