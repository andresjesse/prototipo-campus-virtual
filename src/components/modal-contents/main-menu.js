import React from "react";

import "./styles.css";

export default function MainMenu(props) {
  return (
    <div className="modal-contents">
      <h1>Menu Principal</h1>

      <h2>Geral</h2>
      <a href="https://www.even3.com.br/participante/sessions/">
        <p>Programação Completa do Evento</p>
      </a>

      <h2>Área do Participante</h2>
      <p>[[Link para Inscrição/Login do Participante]]</p>

      <p>[[Link para Programação Do Evento]]</p>
      <p>[[Informações Gerais]]</p>
    </div>
  );
}
