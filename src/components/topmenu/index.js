import React from "react";

import logo from "./logo.png";
import lnHome from "./lnHome.png";
import lnCityTour from "./lnCityTour.png";

import icMenu from "../../assets/icons/ic-menu.png";
import icArrow from "../../assets/icons/ic-arrow.png";

import "./styles.css";

const layouts = {
  default: {
    icon: icMenu,
    ln: lnHome,
  },
  citytour: {
    icon: icArrow,
    ln: lnCityTour,
  },
};

export default function TopMenu(props) {
  return (
    <div className="topmenu global-shadow">
      <img src={logo} className="logo" alt="logo do evento" />
      <img
        src={layouts[props.layout].ln}
        className="logo-name"
        alt="logo com o nome do evento"
      />

      <div className="right-options">
        <div className="divider"></div>

        <img
          src={layouts[props.layout].icon}
          alt="icone do menu"
          className="ic-menu"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}
