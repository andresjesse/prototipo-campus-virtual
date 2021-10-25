import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import Papa from "papaparse";

const fetchCSV = () => {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxnXbuMk_uAMBDa5t6DrqenNIzVW43knBR4Nm0HJ-6SvTvAVmPEa283LzhYHNMttEMitmATzVrYjyF/pub?gid=1610489452&single=true&output=csv";

  const response = fetch(url)
    .then((response) => response.text())
    .then((v) => Papa.parse(v))
    .catch((err) => console.log(err));

  response.then((v) => console.log(v));
};

export default function Page(props) {
  const history = useHistory();

  React.useEffect(() => {
    fetchCSV();
  }, []);

  return (
    <div className="redirect-container">
      <span className="redirect-message global-shadow">
        Localizando a sua sala de Reunião Virtual, aguarde...
      </span>
    </div>
  );
}
