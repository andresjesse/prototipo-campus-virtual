import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import DriveIframe from "../../components/drive-iframe";
import Footer from "../../components/footer";

import externalURLs from "../../services/external-urls";

import "./styles.css";

export default function Authors(props) {
  const history = useHistory();

  return (
    <div className="schedule">
      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="AUTORES"
          onClick={() => history.push("/")}
        />

        <DriveIframe url={externalURLs["drive-guia-autores"]} />

        <Footer />
      </div>
    </div>
  );
}