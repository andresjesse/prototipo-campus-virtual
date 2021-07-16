import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import Gallery from "../../components/gallery";
import Footer from "../../components/footer";

import "./styles.css";

import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import photo4 from "./photo4.jpg";
import photo5 from "./photo5.jpg";
import photo6 from "./photo6.jpg";
import photo7 from "./photo7.jpg";
import photo8 from "./photo8.jpg";
import photo9 from "./photo9.jpg";

const photos = [
  {
    img: photo1,
    title: "Guarapuava",
  },
  {
    img: photo2,
    title: "Lagoa das Lágrimas",
  },
  {
    img: photo3,
    title: "Parque do Lago",
  },
  {
    img: photo4,
    title: "Guarapuava",
  },
  {
    img: photo5,
    title: "Parque das Araucárias",
  },
  {
    img: photo6,
    title: "Parque das Araucárias",
  },
  {
    img: photo7,
    title: "Lagoa das Lágrimas",
  },
  {
    img: photo8,
    title: "Parque do Lago",
  },
  {
    img: photo9,
    title: "Salto São Francisco",
  },
];

export default function CityTour(props) {
  const history = useHistory();

  return (
    <div className="city-tour">
      <div
        className="modal-fullscreen-background"
        onClick={() => history.push("/")}
      ></div>

      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="CITY TOUR"
          onClick={() => history.push("/")}
        />

        <Gallery photos={photos} />

        <Footer />
      </div>
    </div>
  );
}
