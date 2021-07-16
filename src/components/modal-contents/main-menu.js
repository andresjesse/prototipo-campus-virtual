import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineSchedule,
  AiOutlineClockCircle,
  AiOutlineInfoCircle,
  AiOutlineCar,
  AiOutlineFileText,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";

import icEVIN from "../../assets/icons/icEVIN.png";

import "./styles.css";

import { ModalContext } from "../modal";
import modalContents from "../modal-contents";

import externalURLs from "../../services/external-urls";

export default function MainMenu(props) {
  const modal = React.useContext(ModalContext);

  return (
    <>
      <h1>Menu Principal</h1>

      <h2>Geral</h2>

      <div className="link-list">
        <Link to="/prog" className="link">
          <AiOutlineSchedule /> Programação do Evento
        </Link>

        <Link to="/schedule" className="link">
          <AiOutlineClockCircle /> Agenda de Apresentações
        </Link>

        <Link to="/info" className="link">
          <AiOutlineInfoCircle /> Informações Gerais
        </Link>

        <Link to="/citytour" className="link">
          <AiOutlineCar /> City Tour
        </Link>

        <div
          className="link"
          onClick={() => modal.show(modalContents["stand"])}
        >
          <BiWrench /> Projetos
        </div>

        <div
          href="#"
          className="link"
          onClick={() => modal.show(modalContents["sponsor"])}
        >
          <FaRegHandshake />
          Apoiadores
        </div>
      </div>

      <h2>Participante</h2>

      <div className="link-list">
        <a
          href={externalURLs["evin-base"]}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={icEVIN} className="ic-evin" /> Portal de Eventos Científicos
          da UTFPR (EVIN)
        </a>

        <Link to="/authors" className="link">
          <AiOutlineFileText />
          Guia para Autores
        </Link>

        <Link to="/faq" className="link">
          <AiOutlineQuestionCircle />
          FAQ - Dúvidas Frequentes
        </Link>
      </div>
    </>
  );
}
