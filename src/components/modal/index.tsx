import { useModalContext } from "./ModalContext";

import "./styles.css";

import icClose from "../../assets/icons/ic-close.png";

export default function Modal() {
  const modal = useModalContext();

  if (modal.isVisible)
    return (
      <>
        <div
          className="modal-fullscreen-background"
          onClick={() => modal.hide()}
        ></div>

        <div className="modal global-shadow">
          <div className="modal content">{modal.content}</div>

          <img
            src={icClose}
            className="modal ic-close"
            alt="ícone para fechar modal"
            onClick={() => modal.hide()}
          />
        </div>
      </>
    );

  return <div className="modal hidden" />;
}
