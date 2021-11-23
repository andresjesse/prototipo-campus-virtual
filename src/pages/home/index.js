import React from "react";

import Map from "../../components/map";
import TopMenu from "../../components/topmenu";
import Footer from "../../components/footer";

import { AiFillGithub } from "react-icons/ai";

import WelcomePanel from "../../components/welcome-panel";

import "./styles.css";
import Modal, { ModalContext } from "../../components/modal";
import modalContents from "../../components/modal-contents";

const ForkMe = ({ modal }) => (
  <div className="fork-me">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        width: 50,
        textAlign: "center",
        fontSize: 11,
        cursor: "pointer",
      }}
      onClick={() => modal.show(modalContents["post-event-message"])}
    >
      <AiFillGithub size={50} color="white" />
      Fork me on GitHub
    </div>
  </div>
);

export default function Home(props) {
  const modal = React.useContext(ModalContext);

  return (
    <>
      <ForkMe modal={modal} />

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
