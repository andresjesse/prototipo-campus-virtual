import { AiFillGithub } from "react-icons/ai";
import Footer from "../../components/footer";
import Map from "../../components/map";
import TopMenu from "../../components/topmenu";

import Modal from "../../components/modal";
import modalContents from "../../components/modal-contents";
import { useModalContext } from "../../components/modal/ModalContext";
import WelcomePanel from "../../components/welcome-panel";

import "./styles.css";

const ForkMe = () => {
  return (
    <div className="fork-me">
      <a
        href="https://github.com/andresjesse/prototipo-campus-virtual"
        target="_blank"
      >
        <AiFillGithub size={50} color="white" />
        <span>Fork me </span>
        <span>on GitHub</span>
      </a>
    </div>
  );
};

export default function Home() {
  const modal = useModalContext();

  return (
    <>
      <ForkMe />

      <Map />

      <div className="components-overlay">
        <TopMenu
          icon="default"
          title="UTFPR Guarapuava"
          onClick={() => modal.show(modalContents["main-menu"])}
        />

        <Modal />

        <Footer />
      </div>

      <WelcomePanel />
    </>
  );
}
