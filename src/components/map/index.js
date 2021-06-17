import React from "react";

import ScrollContainer from "react-indiana-drag-scroll";

import MapOverlay from "../map-overlay";
import MapOverlayAnim from "../map-overlay-anim";
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
        <MapOverlayAnim
          anim="walk1"
          width={91}
          height={98}
          left={777}
          top={669}
          frames={69}
        />

        <MapOverlayAnim
          anim="photo"
          width={51}
          height={56}
          left={633}
          top={918}
          frames={156}
        />

        <MapOverlayAnim
          anim="basket"
          width={46}
          height={72}
          left={1076}
          top={178}
          frames={140}
        />

        {/* <MapOverlayAnim
          anim="photo"
          width={36}
          height={43}
          left={635}
          top={923}
          frames={130}
        /> */}

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
