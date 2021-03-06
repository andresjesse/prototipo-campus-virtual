import "./templates.css";

import icWord from "../../assets/icons/ic-microsoft-word.svg";
import icODT from "../../assets/icons/ic-odt.svg";
import icLatex from "../../assets/icons/ic-latex.svg";
import icOverleaf from "../../assets/icons/ic-overleaf.png";
import icChecklist from "../../assets/icons/ic-checklist.png";

const Card = ({ title, logo, url }) => (
  <div className="card global-shadow">
    <a href={url} target="_blank" rel="noreferrer">
      <img src={logo} alt="logo do apoiador" />
      <div>{title}</div>
    </a>
  </div>
);

const TemplatesSICITE = () => (
  <div className="templates-container">
    <h1>Templates SICITE</h1>

    <div className="row">
      <Card
        url="/templates/Template_SICITE_2021_FINAL_WORD.docx"
        logo={icWord}
        title="Word"
      />

      <Card
        url="/templates/Template_SICITE_2021_FINAL_WRITER.odt"
        logo={icODT}
        title="OpenDocument"
      />
    </div>

    <div className="row">
      <Card
        url="/templates/Template_SICITE_2021-UTFPR-GP.tar.gz"
        logo={icLatex}
        title="LaTeX"
      />

      <Card
        url="https://www.overleaf.com/latex/templates/template-sei-sicite-2021-utfpr-gp/gvphkcxwqxwn"
        logo={icOverleaf}
        title="Overleaf"
      />
    </div>

    <div className="row">
      <Card
        url="/templates/SICITE_Checklist_Submissao.docx"
        logo={icChecklist}
        title="Checklist para Submissão"
      />
    </div>
  </div>
);

export default TemplatesSICITE;
