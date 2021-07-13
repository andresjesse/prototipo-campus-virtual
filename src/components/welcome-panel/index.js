import React from "react";

import "./styles.css";

import welcome from "./welcome.png";

import icClose from "../../assets/icons/ic-close.png";

export default function WelcomePanel() {
  const [isShown, setShown] = React.useState(true);
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    if (sessionStorage.getItem("showWelcome") === "true") {
      setShown(false);
    } else {
      sessionStorage.setItem("showWelcome", "true");
      setTimeout(() => close(), 3000);
    }
  }, []);

  const close = () => {
    setOpacity(0);
    setTimeout(() => setShown(false), 1000);
  };

  if (!isShown) return <div></div>;

  return (
    <div className="welcome-container" style={{ opacity }}>
      <div className="welcome-panel global-shadow">
        <img src={welcome} alt="banner"></img>

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
