import React from "react";

import api from "../../services/even3-api";

import "./styles.css";

const semana = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

const DivTime = (props) => {
  const { timeData } = props;

  const d = new Date(timeData.date);
  let dformatted =
    d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  return (
    <>
      <div>{semana[d.getDay()]},</div>
      <div>{dformatted}</div>
      <div>
        {timeData.start_time} - {timeData.end_time}
      </div>
    </>
  );
};

export default function BlocoB(props) {
  const [session, setSession] = React.useState(null);

  React.useEffect(() => {
    api.get("/api/v1/session/297163").then((result) => {
      setSession(result.data.data[0]);
    });
  }, []);

  if (!session) return <div>Carregando...</div>;

  return (
    <div className="modal-contents">
      <h1>Bloco B</h1>
      <h2>{session.description}</h2>

      <div className="modal-contents times">
        {session.times.map((timeData, index) => (
          <DivTime key={index} timeData={timeData} />
        ))}
      </div>

      <a href="https://www.even3.com.br/participante/sessions/">
        <button className="modal-contents seeOnEven3">Ver no Even3</button>
      </a>
    </div>
  );
}
