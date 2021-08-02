import "./templates.css";

import icWord from "../../assets/icons/ic-microsoft-word.svg";
import icODT from "../../assets/icons/ic-odt.svg";

const Card = ({ title, logo, url }) => (
  <div className="card global-shadow">
    <a href={url} target="_blank" rel="noreferrer">
      <img src={logo} alt="logo do apoiador" />
      <div>{title}</div>
    </a>
  </div>
);

const TemplatesSEI = () => (
  <div className="templates-container">
    <h1>Templates SEI</h1>

    <h2>Extensão</h2>
    <div className="row">
      <Card
        url="/templates/Template_SEI_2021_EXT_WORD.docx"
        logo={icWord}
        title="Word"
      />

      <Card url="#" logo={icODT} title="OpenDocument" />
    </div>

    <h2>Inovação</h2>
    <div className="row">
      <Card url="#" logo={icWord} title="Word" />

      <Card url="#" logo={icODT} title="OpenDocument" />
    </div>
  </div>
);

export default TemplatesSEI;
