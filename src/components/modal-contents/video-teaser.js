import React from "react";

export default function BlocoF(props) {
  return (
    <>
      <h1>Vídeo Teaser</h1>

      <video className="video" controls>
        <source src="./videos/teaser.mp4" type="video/mp4" />
      </video>
    </>
  );
}
