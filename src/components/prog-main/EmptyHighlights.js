import "./empty-highlights.css";

import { IconContext } from "react-icons";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BsPersonCheck } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";

const Card = (props) => (
  <IconContext.Provider value={{ size: "64px" }}>
    <div className="card global-shadow">
      {props.icon}

      <div className="text">{props.text}</div>
    </div>
  </IconContext.Provider>
);

export default function EmptyHighlights() {
  return (
    <div className="highlights-container">
      <div className="empty-highlights">
        Nossa programação estará disponível em breve, aguarde...
        <div className="cards">
          <Card
            icon={<HiOutlinePresentationChartLine />}
            text="PALESTRAS COM CONTEÚDOS ATUAIS QUE PROMOVEM A APRENDIZAGEM"
          />
          <Card
            icon={<BsPersonCheck />}
            text="ESPECIALISTAS EXPERIENTES QUE APRESENTARÃO AS MELHORES METODOLOGIAS E FERRAMENTAS"
          />

          <Card
            icon={<FiPenTool />}
            text="SOLUÇÕES EDUCACIONAIS PARA TODOS OS PERFIS DE INSTITUIÇÕES DE ENSINO"
          />
        </div>
      </div>
    </div>
  );
}
