import engenhariaCivil from "./sponsor-logos/engenharia-civil.jpg";
import engenhariaMecanica from "./sponsor-logos/engenharia-mecanica.jpg";
import engenhariaMecatronica from "./sponsor-logos/engenharia-mecatronica.jpg";
import tsi from "./sponsor-logos/tsi.jpg";

import "./sponsor.css";

type CardProps = {
  title: string;
  logo: string;
  url: string;
};

const Card = ({ title, logo, url }: CardProps) => (
  <>
    <h2>{title}</h2>

    <a href={url} target="_blank" rel="noreferrer" className="card">
      <img src={logo} alt="logo do apoiador" className=" global-shadow" />
    </a>
  </>
);

const Sponsor = () => (
  <div className="sponsor-container">
    <h1>Estude Aqui!</h1>

    <Card
      title="Engenharia Civil"
      logo={engenhariaCivil}
      url="https://www.utfpr.edu.br/cursos/coordenacoes/graduacao/guarapuava/gp-engenharia-civil/"
    />

    <Card
      title="Engenharia Mecânica"
      logo={engenhariaMecanica}
      url="https://www.utfpr.edu.br/cursos/graduacao/bacharelado/engenharia-mecanica"
    />

    <Card
      title="Engenharia Mecatrônica"
      logo={engenhariaMecatronica}
      url="https://www.utfpr.edu.br/cursos/graduacao/bacharelado/engenharia-mecatronica"
    />

    <Card
      title="Sistemas para Internet"
      logo={tsi}
      url="https://www.utfpr.edu.br/cursos/graduacao/tecnologia/tecnologia-em-sistemas-para-internet"
    />
  </div>
);

export default Sponsor;
