import React from "react";
import { useHistory } from "react-router-dom";

import Footer from "../../components/footer";
import logo from "../../components/topmenu/logo.png";
import icMenu from "./ic-menu.png";
import icInstagram from "./ic-instagram.png";
import logoName from "./city-tour.png";

import "./styles.css";

import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";

const photos = [
  {
    img: photo1,
    title: "Lagoa das Lágrimas",
    description:
      "HTML file is a template. If you open it directly in the browser, you will see an empty page. ",
  },
  {
    img: photo2,
    title: "Parque do Lago",
    description:
      "HTML file is a template. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to ",
  },
  {
    img: photo3,
    title: "Catedral",
    description:
      "HTML file is a template. If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the <body> tag.",
  },
];

export default function CityTour(props) {
  const history = useHistory();

  const [currentPhoto, setCurrentPhoto] = React.useState(0);

  return (
    <div className="city-tour">
      <div className="components-overlay">
        <div className="top-menu">
          <img src={logo} className="logo" alt="logo do evento" />
          <div className="logo-name">
            <img
              src={logoName}
              className="logo-name"
              alt="logo com o título city tour"
            />
          </div>

          <div className="right-options">
            <div className="divider"></div>

            <img
              src={icMenu}
              alt="icone do menu"
              className="ic-menu"
              onClick={() => history.push("/")}
            />
          </div>
        </div>
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

          <div className="title global-shadow">
            {photos[currentPhoto].title}
          </div>

          <img
            src={photos[currentPhoto].img}
            className="photo-frame"
            alt={photos[currentPhoto].title}
          />

          {/* <div className="description global-shadow">
            {photos[currentPhoto].description}
          </div> */}

          <a href="#" className="instagram global-shadow">
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
        <Footer />
      </div>
    </div>
  );
}
