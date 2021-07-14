import React from "react";

import icClose from "../../assets/icons/ic-close.png";

import { AbstractContext } from ".";

const AbstractModal = function () {
  const ctx = React.useContext(AbstractContext);

  const close = () => ctx.setAbstract(null);

  if (ctx.abstract == null) return <div></div>;

  return (
    <div className="abstract-modal-container" onClick={() => close()}>
      <div className="abstract-modal global-shadow" onClick={() => close()}>
        {ctx.abstract}

        <img
          src={icClose}
          className="modal ic-close"
          alt="ícone para fechar modal"
          onClick={() => close()}
        />
      </div>
    </div>
  );
};

export default AbstractModal;
