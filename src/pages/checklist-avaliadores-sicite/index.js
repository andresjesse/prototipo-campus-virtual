import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import Footer from "../../components/footer";

import icChecklist from "../../assets/icons/ic-checklist.png";

import "./styles.css";

const Card = ({ title, logo, url }) => (
  <div className="card global-shadow">
    <a href={url} target="_blank" rel="noreferrer">
      <img src={logo} alt="logo do apoiador" />
      <div>{title}</div>
    </a>
  </div>
);

const InPageModal = () => (
  <div className="modal global-shadow">
    <div className="modal content">
      <div className="templates-container">
        <h1>Checklist para Avaliadores do SICITE</h1>

        <div className="row">
          <Card
            url="/templates/SICITE_Checklist_Avaliacao.docx"
            logo={icChecklist}
            title="Checklist para Avaliação"
          />
        </div>
      </div>
    </div>
  </div>
);

export default function Page(props) {
  const history = useHistory();

  return (
    <div className="drive-container">
      <div
        className="modal-fullscreen-background"
        onClick={() => history.push("/")}
      ></div>

      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="Instruções"
          onClick={() => history.push("/")}
        />

        <InPageModal />

        <Footer />
      </div>
    </div>
  );
}
