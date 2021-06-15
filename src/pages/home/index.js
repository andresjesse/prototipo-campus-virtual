import React from "react";

import Map from "../../components/map";
import TopMenu from "../../components/topmenu";
import Footer from "../../components/footer";

import "./styles.css";
import Modal from "../../components/modal";

import { ModalContext } from "../../components/modal";

export default function Home(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  const modal = {
    show: (content) => {
      setModalContent(content);
      setModalVisible(true);
    },
    hide: () => {
      setModalVisible(false);
    },
  };

  return (
    <ModalContext.Provider value={modal}>
      <Map />

      <div className="components-overlay">
        <TopMenu />

        {modalVisible && <Modal>{modalContent}</Modal>}

        <Footer />
      </div>
    </ModalContext.Provider>
  );
}
