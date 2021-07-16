import React from "react";
import { useHistory } from "react-router-dom";

import icClose from "../../assets/icons/ic-close.png";

import AbstractModal from "./AbstractModal";
import Highlights from "./Highlights";

import "./styles.css";

export const AbstractContext = React.createContext(null);

export default function ProgMain(props) {
  const [abstract, setAbstract] = React.useState(null);

  const history = useHistory();

  return (
    <AbstractContext.Provider value={{ abstract, setAbstract }}>
      <div className="big-container global-shadow">
        <Highlights />
        <AbstractModal />

        <img
          src={icClose}
          className="ic-close"
          alt="ícone para fechar modal"
          onClick={() => history.push("/")}
        />
      </div>
    </AbstractContext.Provider>
  );
}
