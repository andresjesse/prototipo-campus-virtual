import React from "react";

import icClose from "../../assets/icons/ic-close.png";

import "./styles.css";

export const ModalContext = React.createContext();

export function ModalContainer(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  const modal = {
    show: (content) => {
      setModalVisible(true);
      setModalContent(content);
    },
    hide: () => {
      setModalVisible(false);
    },
    isVisible: modalVisible,
    content: modalContent,
  };

  return (
    <ModalContext.Provider value={modal}>
      {props.children}
    </ModalContext.Provider>
  );
}

export default function Modal(props) {
  const modal = React.useContext(ModalContext);

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
