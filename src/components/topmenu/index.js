import React from "react";

import logo from "./logo.png";
import logoName from "./logo-name.png";
import icMenu from "./ic-menu.png";

import "./styles.css";
import { ModalContext } from "../modal";

export default function TopMenu(props) {
  const modal = React.useContext(ModalContext);

  const modalContent = () => (
    <div>
      <p>[[Link para Inscrição/Login do Participante]]</p>
      <p>[[Link para Programação Do Evento]]</p>
      <p>[[Informações Gerais]]</p>
    </div>
  );

  return (
    <div className="topmenu global-shadow">
      <img src={logo} className="logo" alt="logo do evento" />
      <a href="https://www.even3.com.br/bct2021/">
        <img
          src={logoName}
          className="logo-name"
          alt="logo com o nome do evento"
        />
      </a>
      <div className="divider"></div>

      <img
        src={icMenu}
        alt="icone do menu"
        className="ic-menu"
        onClick={() => modal.show(modalContent)}
      />
    </div>
  );
}
