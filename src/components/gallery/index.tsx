import icArrow from "../../assets/icons/ic-arrow.png";
import icClose from "../../assets/icons/ic-close.png";

// import icInstagram from "./ic-instagram.png";

import "./styles.css";
import { useNavigate } from "react-router";
import { useState } from "react";

type GalleryProps = {
  photos: {
    img: string;
    title: string;
  }[];
};

export default function Gallery({ photos }: GalleryProps) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const navigate = useNavigate();

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

      <div className="reference">Foto: reprodução da internet.</div>

      {/* <a
        href="https://instagram.com/....."
        className="instagram"
      >
        <img src={icInstagram} alt="ícone do instagram" />
        @adicione_se_houver_fonte
      </a> */}

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
        onClick={() => navigate("/")}
      />
    </div>
  );
}
