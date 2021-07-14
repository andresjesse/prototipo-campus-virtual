import React from "react";

import { AbstractContext } from ".";

const AbstractModal = function () {
  const ctx = React.useContext(AbstractContext);

  if (ctx.abstract == null) return <div></div>;

  return (
    <div className="abstract-modal" onClick={() => ctx.setAbstract(null)}>
      {ctx.abstract}
    </div>
  );
};

export default AbstractModal;
