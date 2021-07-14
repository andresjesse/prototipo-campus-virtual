import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import DriveIframe from "../../components/drive-iframe";
import Footer from "../../components/footer";

import externalURLs from "../../services/external-urls";

import "./styles.css";

export default function Info(props) {
  const history = useHistory();

  return (
    <div className="drive-container">
      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="INSTRUÇÕES"
          onClick={() => history.push("/")}
        />

        <DriveIframe url={externalURLs["drive-instrucoes-gerais"]} />

        <Footer />
      </div>
    </div>
  );
}