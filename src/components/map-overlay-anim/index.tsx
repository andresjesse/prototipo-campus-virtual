import React from "react";

import { timer } from "d3-timer";

import "./styles.css";

import walk1 from "./anim-walk1.png";
import photo from "./anim-photo.png";
import basket from "./anim-basket.png";
import citytour from "./anim-citytour.png";
import uteco from "./anim-uteco.png";
import stand from "./anim-stand.png";
import sponsor from "./anim-sponsor.svg";

// const minTimeMillis = 1000; //2000
// const maxTimeMillis = 3000; //5000

// const animFrameTimeMs = 50;

const anims = {
  walk1,
  photo,
  basket,
  citytour,
  uteco,
  stand,
  sponsor,
};

type MapOverlayAnimProps = {
  anim: keyof typeof anims;
  width: number;
  height: number;
  left: number;
  top: number;
  minTimeMillis: number;
  maxTimeMillis: number;
  animFrameTimeMs: number;
  frames: number;
};

export default function MapOverlayAnim({
  minTimeMillis,
  maxTimeMillis,
  animFrameTimeMs,
  anim,
  width,
  height,
  left,
  top,
  frames,
}: MapOverlayAnimProps) {
  const [frame, setFrame] = React.useState(0);

  const tickAnimation = () => {
    setFrame((frame + 1) % frames);
  };

  React.useEffect(() => {
    let offsetTime = 0;
    if (frame === 0)
      offsetTime =
        minTimeMillis + Math.random() * (maxTimeMillis - minTimeMillis);

    const t = timer(tickAnimation, offsetTime + animFrameTimeMs);
    return () => t.stop();
  });

  return (
    <div
      className={`map-overlay-anim`}
      style={{
        backgroundImage: `url(${anims[anim]})`,
        backgroundPosition: `0px -${frame * height}px`,
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
      }}
    ></div>
  );
}
