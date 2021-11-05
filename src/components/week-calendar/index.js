import React from "react";
import { useHistory } from "react-router-dom";

import icClose from "../../assets/icons/ic-close.png";
import imgCronograma from "./img-cronograma-semana-evento.svg";

import "./styles.css";

export default function ScheduleTable(props) {
  const history = useHistory();

  return (
    <div className="week-calendar-container global-shadow">
      <img src={imgCronograma} alt="crongorama" />

      <img
        src={icClose}
        className="ic-close"
        alt="ícone para fechar modal"
        onClick={() => history.push("/")}
      />
    </div>
  );
}
