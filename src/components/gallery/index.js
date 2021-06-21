import React from "react";

import icMenu from "./ic-menu.png";
import icInstagram from "./ic-instagram.png";

import "./styles.css";

export default function Gallery(props) {
  const [currentPhoto, setCurrentPhoto] = React.useState(0);

  const { photos } = props;

  return (
    <div className="gallery-container global-shadow">
      <img
        src={icMenu}
        alt="icone do menu"
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

      <a href="https://www.instagram.com" className="instagram global-shadow">
        <img src={icInstagram} alt="ícone do instagram" />
        /Secretaria
      </a>

      <img
        src={icMenu}
        alt="icone do menu"
        className="bt-right global-shadow"
        onClick={() => setCurrentPhoto((currentPhoto + 1) % photos.length)}
      />
    </div>
  );
}
