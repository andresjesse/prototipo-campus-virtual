import "./templates.css";

import icPDF from "../../assets/icons/icPDF.png";

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
    <h1>Anais do SEI-SICITE 2021</h1>

    <div className="row">
      <Card
        url="https://eventos.utfpr.edu.br//sei/sei2021/schedConf/presentations"
        logo={icPDF}
        title="SEI"
      />

      <Card
        url="https://eventos.utfpr.edu.br//sicite/sicite2021/schedConf/presentations"
        logo={icPDF}
        title="SICITE"
      />
    </div>
  </div>
);

export default TemplatesSEI;
