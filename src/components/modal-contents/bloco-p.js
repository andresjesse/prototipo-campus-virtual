import React from "react";

import blocoP from "./photos-blocks/BlocoP.jpg";

export default function BlocoP(props) {
  return (
    <>
      <h1>Bloco P</h1>

      <img src={blocoP} alt="Bloco P" className="single-image" />
    </>
  );
}
