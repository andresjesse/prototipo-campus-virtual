import React from "react";

export default function BlocoB(props) {
  return (
    <>
      <h1>Bloco B</h1>

      <video className="video" controls>
        <source src="./videos/Bloco-B-compressed.mp4" type="video/mp4" />
      </video>
    </>
  );
}
