import React from "react";

import "./styles.css";

import Tutorial from "./Tutorial";

import welcome from "./welcome.png";
import icClose from "../../assets/icons/ic-close.png";

// time (in ms) to auto-hide this welcome banner
const SHOW_TIME = 3000;

export default function WelcomePanel() {
  const [isShown, setShown] = React.useState(true);
  const [opacity, setOpacity] = React.useState(1);

  const [tutorial, setTutorial] = React.useState(false);

  React.useEffect(() => {
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

  const Content = () => {
    if (tutorial) return <Tutorial />;
    return <img src={welcome} alt="banner"></img>;
  };

  if (!isShown) return <div />;

  return (
    <div className="welcome-container" style={{ opacity }}>
      <div className="welcome-panel global-shadow">
        <Content />

        <img
          src={icClose}
          className="modal ic-close"
          alt="ícone para fechar modal"
          onClick={() => close()}
        />
      </div>
    </div>
  );
}
