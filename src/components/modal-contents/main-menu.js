import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineSchedule,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineCar,
  AiOutlineFileText,
  AiOutlineFilePdf,
  AiOutlineQuestionCircle,
  AiOutlineMail,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { BsFileEarmarkSlides } from "react-icons/bs";

import { MdFiberNew } from "react-icons/md";

import icEVIN from "../../assets/icons/icEVIN.png";

import "./styles.css";

import { ModalContext } from "../modal";
import modalContents from "../modal-contents";

import externalURLs from "../../services/external-urls";

/*
 
Links omitidos no lançamento:
  - agenda; <-- ver aplicacao do TagNew
  - programação do evento
  - guia para autores
 
*/

const TagNew = () => (
  <div style={{ color: "red", marginLeft: 8 }}>
    <MdFiberNew />
  </div>
);

export default function MainMenu(props) {
  const modal = React.useContext(ModalContext);

  return (
    <>
      <h2>Menu Principal</h2>

      <div className="link-list">
        <div
          className="link"
          onClick={() => modal.show(modalContents["calendar-svg"])}
        >
          <AiOutlineCalendar />
          Datas Importantes
        </div>

        <a
          href={externalURLs["evin-base"]}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={icEVIN} className="ic-evin" alt="Logo do EVIN" />
          Faça sua Inscrição (EVIN)
        </a>

        <a
          href={externalURLs["evin-base"]}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={icEVIN} className="ic-evin" alt="Logo do EVIN" />
          Portal de Eventos Científicos da UTFPR (EVIN)
        </a>

        {/* <Link to="/checklist-avaliadores-sicite" className="link">
          <AiOutlineCheckSquare /> Checklist para Avaliadores SICITE
        </Link> */}

        <Link to="/approved-papers" className="link">
          <BsFileEarmarkSlides />
          Trabalhos Aceitos
          <TagNew />
        </Link>

        {/* <Link to="/prog" className="link">
          <AiOutlineSchedule /> Programação do Evento
        </Link> */}

        <Link to="/schedule" className="link">
          <AiOutlineClockCircle /> Agenda de Apresentações
          <TagNew />
        </Link>
      </div>

      <h2>Instruções</h2>

      <div className="link-list">
        {/* <Link to="/tutorial-submissao" className="link">
          <AiOutlineFileText />
          Tutorial para a Submissão de Trabalhos
        </Link>

        <Link to="/tutorial-metadados" className="link">
          <AiOutlineFileText />
          Tutorial para Preenchimento de Metadados
        </Link>

        <Link to="/cadastro-avaliadores" className="link">
          <AiOutlineFileText />
          Cadastro de Avaliadores
        </Link> */}

        <Link to="/tutorial-gravacao-video" className="link">
          <AiOutlineFileText />
          Tutorial de Gravação do Vídeo
          <TagNew />
        </Link>

        {/* <Link to="/tutorial-avaliacao" className="link">
          <AiOutlineFileText />
          Tutorial de Avaliação
        </Link>

        <Link to="/tutorial-correcao-submissao" className="link">
          <AiOutlineFileText />
          Tutorial de Correção de Submissão
        </Link> */}

        <Link to="/faq" className="link">
          <AiOutlineQuestionCircle />
          FAQ - Dúvidas Frequentes
        </Link>
      </div>

      <h2>Templates</h2>

      <div className="link-list">
        <div
          className="link"
          onClick={() => modal.show(modalContents["templates-sei"])}
        >
          <AiOutlineFileText />
          SEI
        </div>

        <div
          className="link"
          onClick={() => modal.show(modalContents["templates-sicite"])}
        >
          <AiOutlineFileText />
          SICITE
        </div>
      </div>

      <h2>Geral</h2>

      <div className="link-list">
        <div
          className="link"
          onClick={() => modal.show(modalContents["stand"])}
        >
          <BiWrench /> Projetos
        </div>

        <Link to="/citytour" className="link">
          <AiOutlineCar /> City Tour
        </Link>

        <div
          href="#"
          className="link"
          onClick={() => modal.show(modalContents["sponsor"])}
        >
          <FaRegHandshake />
          Apoiadores
        </div>

        <div
          className="link"
          onClick={() => modal.show(modalContents["contact"])}
        >
          <AiOutlineMail /> Contato
        </div>
      </div>
    </>
  );
}
