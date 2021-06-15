import React from "react";

import icClose from "./ic-close.png";

import "./styles.css";

export const ModalContext = React.createContext();

export function ModalContainer(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  // {modalVisible && <Modal>{modalContent}</Modal>}

  const modal = {
    show: (content) => {
      setModalContent(content);
      setModalVisible(true);
    },
    hide: () => {
      setModalVisible(false);
    },
    isVisible: modalVisible,
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
      <div className="modal global-shadow">
        <div className="modal header">
          <img
            src={icClose}
            className="modal ic-close"
            alt="ícone para fechar modal"
            onClick={() => modal.hide()}
          />
        </div>

        <div className="modal content">{props.children}</div>
      </div>
    );

  return <div />;
}
