import React from "react";

export default function BlocoB(props) {
  return (
    <>
      <h1>Bloco B (video Exemplo)</h1>

      <video className="video" controls>
        <source src="./videos/geral.mp4" type="video/mp4" />
      </video>
    </>
  );
}
