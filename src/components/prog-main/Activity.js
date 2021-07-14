import React from "react";

import { AbstractContext } from ".";

const Activity = function ({ activity }) {
  const ctx = React.useContext(AbstractContext);

  const showAbstract = () => {
    if (activity.abstract != null) ctx.setAbstract(activity.abstract);
  };

  return (
    <div className="row">
      <img src={activity.photo} alt="foto do palestrante" className="photo" />

      <div className="activity-info">
        <span>{activity.author}</span>

        <span
          className="title"
          onClick={showAbstract}
          style={{ cursor: activity.abstract != null ? "pointer" : "auto" }}
        >
          {activity.title}
        </span>

        <div className="abstract-link">
          <a
            href={activity.link}
            target={activity.isPresentation === true ? "_self" : "_blank"}
            rel="noreferrer"
          >
            {activity.isPresentation === true
              ? "Ir para Agenda"
              : activity.link}
          </a>

          {activity.abstract != null && (
            <span onClick={showAbstract}>Ver resumo</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activity;
