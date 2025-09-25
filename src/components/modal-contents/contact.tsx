import { PiTelegramLogoLight } from "react-icons/pi";
import externalURLs from "../../services/external-urls";

import "./contact.css";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineYoutube,
} from "react-icons/ai";

const Contact = () => (
  <div className="contact">
    <h1>Fale conosco</h1>

    <a href={externalURLs["contact-website"]} style={{ fontSize: "1.4em" }}>
      {externalURLs["contact-website"]}
    </a>

    <a href={"tel:" + externalURLs["contact-phone"]} style={{ marginTop: 0 }}>
      <AiOutlinePhone /> {externalURLs["contact-phone"]}
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

      <a
        href={externalURLs["contact-telegram"]}
        target="_blank"
        rel="noreferrer"
      >
        <PiTelegramLogoLight />
      </a>

      {/* <a href={"mailto:" + externalURLs["contact-email"]} target="_blank" rel="noreferrer">
        <AiOutlineMail />
      </a> */}
    </div>
  </div>
);

export default Contact;
