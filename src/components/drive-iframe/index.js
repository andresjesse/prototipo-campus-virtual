import React from "react";

import "./styles.css";

import docsIcon from "./docs-icon.png";

export default function DriveIframe(props) {
  const { url } = props;

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
      </div>

      <div
        className="big-container iframe-container-alternate"
        onClick={() => window.open(url)}
      >
        <span>
          Parece que você está vendo esta página a partir de um celular,
          recomendamos ver em tela cheia:
        </span>
        <img src={docsIcon} className="docs-icon" alt="ícone do google docs" />
      </div>
    </>
  );
}
