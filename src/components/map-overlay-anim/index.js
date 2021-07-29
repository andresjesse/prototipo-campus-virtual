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

export default function MapOverlayAnim(props) {
  const [frame, setFrame] = React.useState(0);

  const { minTimeMillis, maxTimeMillis, animFrameTimeMs } = props;

  const tickAnimation = () => {
    setFrame((frame + 1) % props.frames);
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
        backgroundImage: `url(${anims[props.anim]})`,
        backgroundPosition: `0px -${frame * props.height}px`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        left: `${props.left}px`,
        top: `${props.top}px`,
      }}
    ></div>
  );
}
