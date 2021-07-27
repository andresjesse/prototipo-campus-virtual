import React from "react";

export default function BlocoD(props) {
  return (
    <>
      <h1>Bloco D (video Exemplo)</h1>

      <video className="video" controls>
        <source src="./videos/Bloco-D.mp4" type="video/mp4" />
      </video>
    </>
  );
}
