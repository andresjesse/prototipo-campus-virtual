import React from "react";

import logoUtfpr from "./logo-utfpr.png";

import "./styles.css";

export default function Footer(props) {
  return (
    <div className="footer global-shadow">
      <img src={logoUtfpr} className="logo" alt="logo da UTFPR" />
      <div className="title-container">
        <div className="title-top">
          Universidade Tecnológica Federal do Paraná UTFPR
        </div>
        <div className="title-bottom">Campus Virtual - Guarapuava</div>
      </div>
    </div>
  );
}
