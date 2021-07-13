import React from "react";

import Map from "../../components/map";
import TopMenu from "../../components/topmenu";
import Footer from "../../components/footer";

import WelcomePanel from "../../components/welcome-panel";

import "./styles.css";
import Modal, { ModalContext } from "../../components/modal";
import modalContents from "../../components/modal-contents";

export default function Home(props) {
  const modal = React.useContext(ModalContext);

  return (
    <>
      <Map />

      <div className="components-overlay">
        <TopMenu
          icon="default"
          title="SEI-SICITE 2021"
          onClick={() => modal.show(modalContents["main-menu"])}
        />

        <Modal />

        <Footer />
      </div>

      <WelcomePanel />
    </>
  );
}
