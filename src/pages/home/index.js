import React from "react";

import Map from "../../components/map";
import TopMenu from "../../components/topmenu";
import Footer from "../../components/footer";

import "./styles.css";
import Modal, { ModalContainer } from "../../components/modal";

export default function Home(props) {
  return (
    <ModalContainer>
      <Map />

      <div className="components-overlay">
        <TopMenu />

        {/* {modalVisible && <Modal>{modalContent}</Modal>} */}
        <Modal />

        <Footer />
      </div>
    </ModalContainer>
  );
}
