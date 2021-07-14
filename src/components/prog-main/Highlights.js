import React from "react";

import ProgTime from "./ProgTime";

import progHighlights from "../../services/prog-highlights/prog-highlights";

const Highlights = function () {
  const [day, setDay] = React.useState(0);

  const RenderDay = () => {
    if (!progHighlights[day].prog)
      return <span>Programação não cadastrada, retorne em breve.</span>;

    return progHighlights[day].prog.map((p, index) => {
      return <ProgTime key={index} prog={p} />;
    });
  };

  return (
    <div className="highlights-container">
      <div className="tabs">
        {progHighlights.map((d, index) => {
          return (
            <button
              key={index}
              className={`tab ${index === day ? "active" : ""}`}
              onClick={() => setDay(index)}
            >
              {d.day}
            </button>
          );
        })}
      </div>

      <RenderDay />
    </div>
  );
};

export default Highlights;
