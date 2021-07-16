import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import icClose from "../../assets/icons/ic-close.png";
import docsIcon from "./docs-icon.png";

export default function DriveIframe(props) {
  const { url } = props;

  const history = useHistory();

  return (
    <>
      <div className="big-container iframe-container global-shadow">
        <div className="docs-icon-container" onClick={() => window.open(url)}>
          <span>Ver em tela cheia</span>
          <img
            src={docsIcon}
            className="docs-icon"
            alt="ícone do google docs"
          />
        </div>

        <iframe
          frameBorder="0"
          className="drive-iframe"
          src={url}
          title="drive"
        ></iframe>

        <img
          src={icClose}
          className="ic-close"
          alt="ícone para fechar modal"
          onClick={() => history.push("/")}
        />
      </div>

      <div className="big-container iframe-container-alternate">
        <div className="col" onClick={() => window.open(url)}>
          <span>
            Parece que você está vendo esta página a partir de um celular,
            clique aqui para ver em tela cheia:
          </span>
          <img
            src={docsIcon}
            className="docs-icon"
            alt="ícone do google docs"
          />
        </div>

        <img
          src={icClose}
          className="ic-close"
          alt="ícone para fechar modal"
          onClick={() => history.push("/")}
        />
      </div>
    </>
  );
}
