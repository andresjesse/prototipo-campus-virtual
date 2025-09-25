import { AiOutlineCar } from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

import ScrollContainer from "react-indiana-drag-scroll";

import MapOverlay from "../map-overlay";
import MapOverlayAnim from "../map-overlay-anim";
import MapPin from "../map-pin";

import Vignette from "../vignette";

import modalContents from "../modal-contents";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useModalContext } from "../modal/ModalContext";
import "./styles.css";

export default function Map() {
  const navigate = useNavigate();

  const container = useRef<any>(null);

  const [hover, setHover] = useState("");

  // set initial scroll position
  useEffect(() => {
    if (container.current) {
      container.current.scrollTo(360 + window.innerWidth / 1080, 250);
    }
  }, []);

  const modal = useModalContext();

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
          minTimeMillis={3000}
          maxTimeMillis={5000}
          animFrameTimeMs={50}
        />

        <MapOverlayAnim
          anim="photo"
          width={51}
          height={56}
          left={633}
          top={918}
          frames={156}
          minTimeMillis={1000}
          maxTimeMillis={3000}
          animFrameTimeMs={50}
        />

        <MapOverlayAnim
          anim="basket"
          width={46}
          height={72}
          left={1076}
          top={178}
          frames={140}
          minTimeMillis={0}
          maxTimeMillis={1000}
          animFrameTimeMs={50}
        />

        <MapOverlayAnim
          anim="citytour"
          width={35}
          height={43}
          left={249}
          top={477}
          frames={90}
          minTimeMillis={1000}
          maxTimeMillis={3000}
          animFrameTimeMs={50}
        />

        <MapOverlayAnim
          anim="uteco"
          width={25}
          height={27}
          left={459}
          top={573}
          frames={90}
          minTimeMillis={1000}
          maxTimeMillis={3000}
          animFrameTimeMs={50}
        />

        <MapOverlayAnim
          anim="stand"
          width={23}
          height={28}
          left={494}
          top={566}
          frames={90}
          minTimeMillis={2000}
          maxTimeMillis={4000}
          animFrameTimeMs={50}
        />

        <MapOverlayAnim
          anim="sponsor"
          width={82}
          height={44}
          left={978}
          top={381}
          frames={2}
          minTimeMillis={0}
          maxTimeMillis={0}
          animFrameTimeMs={2000}
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
          building="block-p"
          onMouseEnter={() => setHover("block-p")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["block-p"])}
        />

        <MapOverlay
          building="ru"
          onMouseEnter={() => setHover("ru")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["ru"])}
        />

        <MapOverlay
          building="bus"
          onMouseEnter={() => setHover("bus")}
          onMouseLeave={() => setHover("")}
          onClick={() => navigate("/citytour")}
        />

        <MapOverlay
          building="stand"
          onMouseEnter={() => setHover("stand")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["stand"])}
        />

        <MapOverlay
          building="sponsor"
          onMouseEnter={() => setHover("sponsor")}
          onMouseLeave={() => setHover("")}
          onClick={() => modal.show(modalContents["sponsor"])}
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
          letter="P"
          text="Bloco P"
          building="block-p"
          isActive={hover === "block-p"}
        />

        <MapPin
          letter={<IoFastFoodOutline />}
          text="R.U."
          building="ru"
          isActive={hover === "ru"}
        />

        <MapPin
          letter={<AiOutlineCar />}
          text="City Tour"
          building="bus"
          isActive={hover === "bus"}
        />

        <MapPin
          letter={<BiWrench />}
          text="Projetos"
          building="stand"
          isActive={hover === "stand"}
        />

        <MapPin
          letter={<FaArrowDown />}
          text="Estude Aqui!"
          building="sponsor"
          isActive={hover === "sponsor"}
        />
      </div>

      <Vignette />
    </ScrollContainer>
  );
}
