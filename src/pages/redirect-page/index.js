import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import externalURLs from "../../services/external-urls";

import "./styles.css";

import Papa from "papaparse";

export default function Page(props) {
  const history = useHistory();

  const params = new URLSearchParams(useLocation().search);

  const id = params.get("id");

  React.useEffect(() => {
    const response = fetch(externalURLs["csv-meets"])
      .then((response) => response.text())
      .then((data) => Papa.parse(data, { header: true }))
      .catch((err) => console.log(err));

    response.then((arr) => {
      console.log(arr);
      arr.data.forEach((paper) => {
        if (paper.id === id) {
          console.log("redirect to:", paper);
          history.push(paper.meet);
        }
      });
    });
  }, []);

  return (
    <div className="redirect-container">
      <span className="redirect-message global-shadow">
        Localizando a sua sala de Reunião Virtual, aguarde...
      </span>
    </div>
  );
}
