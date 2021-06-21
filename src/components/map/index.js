import React from "react";
import { useHistory } from "react-router-dom";

import ScrollContainer from "react-indiana-drag-scroll";

import MapOverlay from "../map-overlay";
import MapOverlayAnim from "../map-overlay-anim";
import MapPin from "../map-pin";

import { ModalContext } from "../modal";
import Vignette from "../vignette";

import modalContents from "../modal-contents";

import "./styles.css";

export default function Map(props) {
  const history = useHistory();

  const container = React.useRef(null);

  const [hover, setHover] = React.useState("");

  // set initial scroll position
  React.useEffect(() => {
    if (container.current) {
      container.current.scrollTo(150, 1080);
    }
  }, []);

  const modal = React.useContext(ModalContext);

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

        <MapOverlayAnim
          anim="citytour"
          width={35}
          height={43}
          left={249}
          top={477}
          frames={90}
        />

        <MapOverlay
          building="block-b"
          onMouseEnter={() => setHover("block-b")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-b"])}
        />
        <MapOverlay
          building="block-d"
          onMouseEnter={() => setHover("block-d")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-d"])}
        />

        <MapOverlay
          building="block-f"
          onMouseEnter={() => setHover("block-f")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-f"])}
        />

        <MapOverlay
          building="block-a"
          onMouseEnter={() => setHover("block-a")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-a"])}
        />

        <MapOverlay
          building="block-c"
          onMouseEnter={() => setHover("block-c")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-c"])}
        />

        <MapOverlay
          building="block-e"
          onMouseEnter={() => setHover("block-e")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-e"])}
        />

        <MapOverlay
          building="block-h"
          onMouseEnter={() => setHover("block-h")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-h"])}
        />

        <MapOverlay
          building="block-r"
          onMouseEnter={() => setHover("block-r")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-r"])}
        />

        <MapOverlay
          building="bus"
          onMouseEnter={() => setHover("bus")}
          onMouseLeave={() => setHover("")}
          onClick={() => history.push("/citytour")}
        />

        <MapPin
          letter="B"
          text="Bloco B"
          building="block-b"
          isActive={hover === "block-b"}
        />
        <MapPin
          letter="D"
          text="Bloco D"
          building="block-d"
          isActive={hover === "block-d"}
        />
        <MapPin
          letter="F"
          text="Bloco F"
          building="block-f"
          isActive={hover === "block-f"}
        />

        <MapPin
          letter="A"
          text="Bloco A"
          building="block-a"
          isActive={hover === "block-a"}
        />

        <MapPin
          letter="C"
          text="Bloco C"
          building="block-c"
          isActive={hover === "block-c"}
        />

        <MapPin
          letter="E"
          text="Bloco E"
          building="block-e"
          isActive={hover === "block-e"}
        />

        <MapPin
          letter="H"
          text="Bloco H"
          building="block-h"
          isActive={hover === "block-h"}
        />

        <MapPin
          letter="R"
          text="Bloco R"
          building="block-r"
          isActive={hover === "block-r"}
        />

        <MapPin
          letter="*"
          text="City Tour"
          building="bus"
          isActive={hover === "bus"}
        />
      </div>

      <Vignette />
    </ScrollContainer>
  );
}
