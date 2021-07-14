import React from "react";

export default function BlocoF(props) {
  return (
    <>
      <h1>Bloco F (video Exemplo)</h1>

      <video className="video" controls>
        <source src="./videos/geral.mp4" type="video/mp4" />
      </video>
    </>
  );
}
