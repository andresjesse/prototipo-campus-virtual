import utfpr from "./sponsor-logos/utfpr.svg";
import parana from "./sponsor-logos/parana.svg";
import fundacaoAraucaria from "./sponsor-logos/fundacao-araucaria.svg";
import cnpq from "./sponsor-logos/cnpq.svg";
import bosch from "./sponsor-logos/bosch.svg";
import valeDoGenoma from "./sponsor-logos/vale-do-genoma.png";
import ipec from "./sponsor-logos/ipec.png";
import sbb from "./sponsor-logos/sbb.jpg";

import "./sponsor.css";

const Card = ({ title, logo, url }) => (
  <>
    <h2>{title}</h2>
    <a href={url} target="_blank" rel="noreferrer" className="card">
      <img src={logo} alt="logo do apoiador" className=" global-shadow" />
    </a>
  </>
);

const Sponsor = () => (
  <div className="sponsor-container">
    <h1>Apoiadores</h1>

    <Card title="UTFPR" logo={utfpr} url="https://utfpr.edu.br/" />

    <Card title="CNPq" logo={cnpq} url="https://www.gov.br/cnpq/pt-br" />

    <Card
      title="Fundação Araucária"
      logo={fundacaoAraucaria}
      url="http://www.fappr.pr.gov.br/"
    />

    <Card
      title="Governo do Estado do Paraná"
      logo={parana}
      url="https://www.parana.pr.gov.br/"
    />

    <Card title="Bosch" logo={bosch} url="https://www.bosch.com.br/" />

    <Card title="Vale do Genoma" logo={valeDoGenoma} url="#" />

    <Card
      title="Instituto para Pesquisa do Câncer"
      logo={ipec}
      url="https://ipec.org.br/"
    />

    <Card
      title="Sociedade Brasileira de Bioética"
      logo={sbb}
      url="https://www.sbbioetica.org.br/Quem-somos/PR"
    />
  </div>
);

export default Sponsor;
