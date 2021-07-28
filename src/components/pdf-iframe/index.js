import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import icClose from "../../assets/icons/ic-close.png";
import pdfIcon from "./pdf-icon.png";

export default function PDFIframe(props) {
  const url = "pdfs/" + props.f + "#toolbar=0";
  const fullscreenUrl = "pdfs/" + props.f;

  const history = useHistory();

  return (
    <>
      <div className="big-container iframe-container global-shadow">
        <div
          className="docs-icon-container"
          onClick={() => window.open(fullscreenUrl)}
        >
          <span>Ver em tela cheia</span>
          <img src={pdfIcon} className="docs-icon" alt="ícone pdf" />
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
          style={{ marginRight: 32 }}
          onClick={() => history.push("/")}
        />
      </div>

      <div className="big-container iframe-container-alternate">
        <div className="col" onClick={() => window.open(url)}>
          <span>
            Parece que você está vendo esta página a partir de um celular,
            clique aqui para ver em tela cheia:
          </span>
          <img src={pdfIcon} className="docs-icon" alt="ícone pdf" />
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
