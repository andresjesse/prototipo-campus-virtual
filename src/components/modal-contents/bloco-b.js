import React from "react";

import api from "../../services/even3-api";

import "./styles.css";

export default function BlocoB(props) {
  const [p1, setP1] = React.useState(<div>Carregando...</div>);

  React.useEffect(() => {
    //api.get("/api/v1/session/307837").then((result) => {
    api.get("/api/v1/session").then((result) => {
      let divP1 = [];
      result.data.data.forEach((session) => {
        divP1.push(<div key={session.id_session}>{session.title}</div>);
      });

      setP1(divP1);
    });
  }, []);

  return (
    <div className="modal-contents">
      <h1>Bloco B</h1>
      <h2>Ciência da Computação</h2>

      {p1}

      <p>[[Link para Programação Deste Ambiente -- Ver no Even3]]</p>

      <h2>Matemática/Probabilidade e Estatística</h2>
      <p>[[Link para Programação Deste Ambiente]]</p>
    </div>
  );
}
