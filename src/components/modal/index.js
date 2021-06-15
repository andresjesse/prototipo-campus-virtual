import React from "react";

import icClose from "./ic-close.png";

import "./styles.css";

export const ModalContext = React.createContext();

export function ModalContainer(props) {}

export default function Modal(props) {
  const modal = React.useContext(ModalContext);

  return (
    <div className="modal global-shadow">
      <div className="modal header">
        <img
          src={icClose}
          className="modal ic-close"
          alt="ícone para fechar modal"
          onClick={() => modal.hide()}
        />
      </div>

      <div className="modal content">{props.children}</div>
    </div>
  );
}
