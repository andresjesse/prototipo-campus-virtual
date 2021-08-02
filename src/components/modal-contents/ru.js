import React from "react";

import ru from "./photos-blocks/ru.jpg";

export default function BlocoP(props) {
  return (
    <>
      <h1>Restaurante Universitário</h1>

      <img src={ru} alt="Restaurante Universitário" className="single-image" />
    </>
  );
}
