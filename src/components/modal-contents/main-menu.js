import React from "react";

import externalURLs from "../../services/external-urls";

import "./styles.css";

export default function MainMenu(props) {
  return (
    <div className="modal-contents">
      <h1>Menu Principal</h1>

      <h2>Geral</h2>

      <a href="/schedule">
        <p>Agenda de Apresentações</p>
      </a>

      <a href={externalURLs["even3-base"]}>
        <p>Programação Geral</p>
      </a>

      <h2>Área do Participante</h2>

      <a href="/schedule">
        <p>Agenda de Apresentações</p>
      </a>

      <p>[[Link para Programação Do Evento]]</p>
      <p>[[Informações Gerais]]</p>
    </div>
  );
}
