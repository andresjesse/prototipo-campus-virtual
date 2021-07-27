import "./contact.css";

import {
  AiOutlineMail,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

import externalURLs from "../../services/external-urls";

const mailto = "mailto:" + externalURLs["contact-email"];

const Contact = () => (
  <div className="contact">
    <h1>Contato</h1>

    <p>Qualquer dúvida sobre o evento entre em contato conosco:</p>

    <a href={mailto}>
      <AiOutlineMail /> {externalURLs["contact-email"]}
    </a>

    <div className="social">
      <a
        href={externalURLs["contact-youtube"]}
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineYoutube />
      </a>

      <a
        href={externalURLs["contact-facebook"]}
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineFacebook />
      </a>

      <a
        href={externalURLs["contact-instagram"]}
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInstagram />
      </a>
    </div>
  </div>
);

export default Contact;
