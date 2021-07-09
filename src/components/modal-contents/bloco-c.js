import React from "react";

import icArrow from "../../assets/icons/ic-arrow.png";

import photo1 from "./photos/bloco-C-1.jpg";
import photo2 from "./photos/bloco-C-2.jpg";

const photos = [
  {
    img: photo1,
    txt: "Laboratório da Geada Forte",
  },
  {
    img: photo2,
    txt: "Laboratório Raspberry Pi",
  },
];

export default function BlocoC(props) {
  const [currentPhoto, setCurrentPhoto] = React.useState(0);

  return (
    <>
      <h1>Bloco C</h1>
      <p>{photos[currentPhoto].txt}</p>

      <div className="photo-container">
        <img
          src={icArrow}
          alt="icone flecha a esquerda"
          className="bt-left global-shadow"
          onClick={() => {
            if (currentPhoto > 0) setCurrentPhoto(currentPhoto - 1);
            else setCurrentPhoto(photos.length - 1);
          }}
        />

        <img
          src={photos[currentPhoto].img}
          className="photo-frame"
          alt="Foto do ambiente"
        />

        <img
          src={icArrow}
          alt="icone flecha a direita"
          className="bt-right global-shadow"
          onClick={() => setCurrentPhoto((currentPhoto + 1) % photos.length)}
        />
      </div>
    </>
  );
}
