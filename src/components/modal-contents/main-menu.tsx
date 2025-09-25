import {
  AiOutlineCar,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdFiberNew, MdPeopleOutline } from "react-icons/md";
import { Link } from "react-router";

import "./styles.css";

import { LiaBookReaderSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import { PiChalkboardTeacher, PiTelegramLogoLight } from "react-icons/pi";
import modalContents from ".";
import externalURLs from "../../services/external-urls";
import { useModalContext } from "../modal/ModalContext";

const TagNew = () => (
  <div style={{ color: "red", marginLeft: 8 }}>
    <MdFiberNew />
  </div>
);

export default function MainMenu() {
  const modal = useModalContext();

  return (
    <>
      <h2>Menu Principal</h2>

      <div className="link-list">
        <div
          className="link"
          onClick={() => modal.show(modalContents["sponsor"])}
        >
          <FaArrowDown />
          Estude Aqui!
          <TagNew />
        </div>

        <Link
          to="https://acessounico.mec.gov.br/sisu"
          className="link"
          target="_blank"
        >
          <AiOutlineLink />
          Site do SISU
        </Link>

        {/* <div
          className="link"
          onClick={() => modal.show(modalContents["calendar-svg"])}
        >
          <AiOutlineCalendar />
          Datas Importantes
        </div> */}
      </div>

      <h2>Usuários</h2>

      <div className="link-list">
        <Link
          to="https://www.utfpr.edu.br/alunos"
          className="link"
          target="_blank"
        >
          <FiUsers /> Alunos
        </Link>

        <Link
          to="https://www.utfpr.edu.br/comunidade"
          className="link"
          target="_blank"
        >
          <MdPeopleOutline /> Comunidade
        </Link>

        <Link
          to="https://www.utfpr.edu.br/alunos/egressos"
          className="link"
          target="_blank"
        >
          <LuGraduationCap /> Egressos
        </Link>

        <Link
          to="https://www.utfpr.edu.br/noticias/geral/estude-na-utfpr"
          className="link"
          target="_blank"
        >
          <LiaBookReaderSolid size={22} /> Futuros alunos
        </Link>

        <Link
          to="https://www.utfpr.edu.br/servidores/site"
          className="link"
          target="_blank"
        >
          <PiChalkboardTeacher />
          Servidores
        </Link>
      </div>

      <h2>Redes Sociais</h2>

      <div className="link-list">
        <Link to={externalURLs["contact-instagram"]} className="link">
          <AiOutlineInstagram /> Instagram
        </Link>

        <Link to={externalURLs["contact-facebook"]} className="link">
          <AiOutlineFacebook /> Facebook
        </Link>

        <Link to={externalURLs["contact-youtube"]} className="link">
          <AiOutlineYoutube /> YouTube
        </Link>

        <Link to={externalURLs["contact-telegram"]} className="link">
          <PiTelegramLogoLight /> Telegram
        </Link>
      </div>

      <h2>Geral</h2>

      <div className="link-list">
        <Link to="/citytour" className="link">
          <AiOutlineCar /> City Tour
        </Link>

        <div
          className="link"
          onClick={() => modal.show(modalContents["contact"])}
        >
          <AiOutlineMail /> Contatos
        </div>
      </div>
    </>
  );
}
