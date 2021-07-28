import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineSchedule,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineCar,
  AiOutlineFileText,
  AiOutlineQuestionCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";

import { MdFiberNew } from "react-icons/md";

import icEVIN from "../../assets/icons/icEVIN.png";

import "./styles.css";

import { ModalContext } from "../modal";
import modalContents from "../modal-contents";

import externalURLs from "../../services/external-urls";

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
        <a
          href={externalURLs["evin-base"]}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={icEVIN} className="ic-evin" alt="Logo do EVIN" />
          Portal de Eventos Científicos da UTFPR (EVIN)
        </a>

        <div
          className="link"
          onClick={() => modal.show(modalContents["calendar-svg"])}
        >
          <AiOutlineCalendar />
          Datas Importantes
        </div>
      </div>

      <h2>Participante</h2>

      <div className="link-list">
        <Link to="/authors" className="link">
          <AiOutlineFileText />
          Guia para Autores
        </Link>

        <Link to="/faq" className="link">
          <AiOutlineQuestionCircle />
          FAQ - Dúvidas Frequentes
        </Link>

        <Link to="/prog" className="link">
          <AiOutlineSchedule /> Programação do Evento
        </Link>

        <Link to="/schedule" className="link">
          <AiOutlineClockCircle /> Agenda de Apresentações
          <TagNew />
        </Link>
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
