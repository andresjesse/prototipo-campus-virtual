import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import externalURLs from "../../services/external-urls";

import "./styles.css";

import Papa from "papaparse";

export default function Page(props) {
  const history = useHistory();

  const params = new URLSearchParams(useLocation().search);

  const to = params.get("to");

  React.useEffect(() => {
    const response = fetch(externalURLs["csv-meets"])
      .then((response) => response.text())
      .then((data) => Papa.parse(data, { header: true }))
      .catch((err) => console.log(err));

    response.then((arr) => {
      // console.log(arr);
      arr.data.forEach((meet) => {
        if (meet.link_virtual === "/redirect?to=" + to) {
          // console.log("redirect to:", meet);
          window.location.href = meet.meet;
        }
      });
    });
  }, []);

  return (
    <div className="redirect-container">
      <span className="redirect-message global-shadow">
        {/* Esta apresentação está agendada para a semana do evento, até lá! */}
        Localizando a sua sala de Reunião Virtual, aguarde...
      </span>
    </div>
  );
}
