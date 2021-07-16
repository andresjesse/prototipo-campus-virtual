import React from "react";
import { useHistory } from "react-router-dom";

import icArrow from "../../assets/icons/ic-arrow.png";
import icInstagram from "./ic-instagram.png";
import icClose from "../../assets/icons/ic-close.png";

import "./styles.css";

export default function Gallery(props) {
  const [currentPhoto, setCurrentPhoto] = React.useState(0);

  const { photos } = props;

  const history = useHistory();

  return (
    <div className="gallery-container global-shadow">
      <img
        src={icArrow}
        alt="icone flecha a esquerda"
        className="bt-left global-shadow"
        onClick={() => {
          if (currentPhoto > 0) setCurrentPhoto(currentPhoto - 1);
          else setCurrentPhoto(photos.length - 1);
        }}
      />

      <div className="title global-shadow">{photos[currentPhoto].title}</div>

      <img
        src={photos[currentPhoto].img}
        className="photo-frame"
        alt={photos[currentPhoto].title}
      />

      <div className="reference">Foto: Anderson Zacalusni</div>

      <a
        href="https://instagram.com/turismoeeventosgua?utm_medium=copy_link"
        className="instagram"
      >
        <img src={icInstagram} alt="ícone do instagram" />
        @turismoeeventosgua
      </a>

      <img
        src={icArrow}
        alt="icone flecha a direita"
        className="bt-right global-shadow"
        onClick={() => setCurrentPhoto((currentPhoto + 1) % photos.length)}
      />

      <img
        src={icClose}
        className="ic-close"
        alt="ícone para fechar modal"
        onClick={() => history.push("/")}
      />
    </div>
  );
}
