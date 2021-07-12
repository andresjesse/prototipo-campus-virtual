import React from "react";

export default function BlocoD(props) {
  return (
    <div className="video-container">
      <h1>Nosso Campus</h1>

      <video className="video" controls>
        <source src="./videos/geral.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
