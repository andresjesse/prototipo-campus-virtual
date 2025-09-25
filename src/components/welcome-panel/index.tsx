import { useEffect, useState } from "react";

import "./styles.css";

import Tutorial from "./Tutorial";

import icClose from "../../assets/icons/ic-close.png";
import welcome from "./welcome.png";

// time (in ms) to auto-hide this welcome banner
const SHOW_TIME = 3000;

type ContentProps = {
  tutorial: boolean;
  close: () => void;
};

const Content = ({ tutorial, close }: ContentProps) => {
  if (tutorial) {
    return <Tutorial onFinish={close} />;
  }

  return <img src={welcome} alt="banner"></img>;
};

export default function WelcomePanel() {
  const [isShown, setShown] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const [tutorial, setTutorial] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("showWelcome") === "true") {
      setShown(false);
    } else {
      // check for tutorial (first time only)
      if (localStorage.getItem("skipTutorial") === "true") {
        sessionStorage.setItem("showWelcome", "true");
        setTimeout(() => close(), SHOW_TIME);
      } else {
        // disable welcome banner (and tutorial) in the remaining of this session
        sessionStorage.setItem("showWelcome", "true");

        // invoke tutorial
        setTimeout(() => showTutorial(), SHOW_TIME);
      }
    }
  }, []);

  const close = () => {
    setOpacity(0);
    setTimeout(() => setShown(false), 1000);
  };

  const showTutorial = () => {
    setTutorial(true);

    // disable tutorial forever (in this browser)
    localStorage.setItem("skipTutorial", "true");
  };

  if (!isShown) return <div />;

  return (
    <div className="welcome-container" style={{ opacity }}>
      <div className="modal-fullscreen-background" onClick={close}></div>

      <div className="welcome-panel global-shadow">
        <Content close={close} tutorial={tutorial} />

        <img
          src={icClose}
          className="modal ic-close"
          alt="ícone para fechar modal"
          onClick={close}
        />
      </div>
    </div>
  );
}
