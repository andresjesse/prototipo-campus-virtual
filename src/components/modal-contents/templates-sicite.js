import "./templates.css";

import icWord from "../../assets/icons/ic-microsoft-word.svg";
import icODT from "../../assets/icons/ic-odt.svg";
import icLatex from "../../assets/icons/ic-latex.svg";

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
      <Card url="#" logo={icWord} title="Word" />

      <Card url="#" logo={icODT} title="OpenDocument" />

      <Card url="#" logo={icLatex} title="LaTeX" />
    </div>
  </div>
);

export default TemplatesSICITE;
