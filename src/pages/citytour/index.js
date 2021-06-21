import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import Gallery from "../../components/gallery";
import Footer from "../../components/footer";

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

  return (
    <div className="city-tour">
      <div className="components-overlay">
        <TopMenu layout="citytour" onClick={() => history.push("/")} />

        <Gallery photos={photos} />

        <Footer />
      </div>
    </div>
  );
}
