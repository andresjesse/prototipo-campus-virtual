import React from "react";

import ScrollContainer from "react-indiana-drag-scroll";

import MapOverlay from "../map-overlay";
import MapPin from "../map-pin";

import { ModalContext } from "../modal";
import Vignette from "../vignette";

import "./styles.css";

export default function Map(props) {
  const container = React.useRef(null);

  const [hover, setHover] = React.useState("");

  // set initial scroll position
  React.useEffect(() => {
    if (container.current) {
      container.current.scrollTo(150, 1080);
    }
  }, []);

  const modal = React.useContext(ModalContext);

  const modalContentBlocoB = () => (
    <div>
      <p>[[Bloco B]]</p>
      <p>[[Laborátios de Informática B1, B2, e B3]]</p>
      <p>[[Link para Programação Deste Ambiente]]</p>
    </div>
  );

  const modalContentBlocoD = () => (
    <div>
      <p>[[Bloco D]]</p>
      <p>[[Laborátios X e Y, Biblioteca]]</p>
      <p>[[Link para Programação Deste Ambiente]]</p>
    </div>
  );

  return (
    <ScrollContainer
      className="scroll-container"
      style={{ height: "100vh" }}
      innerRef={container}
    >
      <div className="background">
        <MapOverlay
          building="block-b"
          onMouseEnter={() => setHover("block-b")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContentBlocoB)}
        />
        <MapOverlay
          building="block-d"
          onMouseEnter={() => setHover("block-d")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContentBlocoD)}
        />

        <MapPin
          text="Bloco B"
          building="block-b"
          isActive={hover === "block-b"}
        />
        <MapPin
          text="Bloco D"
          building="block-d"
          isActive={hover === "block-d"}
        />
      </div>

      <Vignette />
    </ScrollContainer>
  );
}
