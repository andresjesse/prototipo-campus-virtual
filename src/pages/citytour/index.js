import React from "react";
import { useHistory } from "react-router-dom";

import Footer from "../../components/footer";
import logo from "../../components/topmenu/logo.png";
import icMenu from "./ic-menu.png";
import logoName from "./city-tour.png";

import "./styles.css";

import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import Gallery from "../../components/gallery";

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

        <Gallery photos={photos} />

        <Footer />
      </div>
    </div>
  );
}
