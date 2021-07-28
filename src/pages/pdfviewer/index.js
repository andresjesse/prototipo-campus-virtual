import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import PDFIframe from "../../components/pdf-iframe";
import Footer from "../../components/footer";

import "./styles.css";

export default function Authors(props) {
  const history = useHistory();

  const params = new URLSearchParams(useLocation().search);

  return (
    <div className="drive-container">
      <div
        className="modal-fullscreen-background"
        onClick={() => history.push("/")}
      ></div>

      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="DOCUMENTO"
          onClick={() => history.push("/")}
        />

        <PDFIframe f={params.get("f")} />

        <Footer />
      </div>
    </div>
  );
}
