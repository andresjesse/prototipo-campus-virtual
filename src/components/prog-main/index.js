import React from "react";

import AbstractModal from "./AbstractModal";
import Highlights from "./Highlights";

import "./styles.css";

export const AbstractContext = React.createContext(null);

export default function ProgMain(props) {
  const [abstract, setAbstract] = React.useState(null);

  return (
    <AbstractContext.Provider value={{ abstract, setAbstract }}>
      <div className="big-container global-shadow">
        <Highlights />
        <AbstractModal />
      </div>
    </AbstractContext.Provider>
  );
}
