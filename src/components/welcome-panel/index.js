import React from "react";

import "./styles.css";

import welcome from "./welcome.png";

import card1 from "./tutorial-card1.png";
import card2 from "./tutorial-card2.png";
import card3 from "./tutorial-card3.png";
import card4 from "./tutorial-card4.png";

import icArrow from "../../assets/icons/ic-arrow.png";

import icClose from "../../assets/icons/ic-close.png";

// time (in ms) to auto-hide this welcome banner
const SHOW_TIME = 3000;

const cards = [card1, card2, card3, card4];

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

  const Content = function () {
    const [card, setCard] = React.useState(0);

    if (tutorial)
      return (
        <div className="tutorial-container">
          <h2>Primeira vez por aqui?</h2>
          <h3>Conheça nosso Campus Virtual:</h3>

          <div className="cards">
            <img
              src={icArrow}
              alt="arrow left"
              className="arrow global-shadow"
              onClick={() => {
                if (card > 0) setCard(card - 1);
                else setCard(cards.length - 1);
              }}
            />

            <img src={cards[card]} alt="card tutorial" className="card-img" />

            <img
              src={icArrow}
              alt="arrow left"
              className="arrow arrow-right global-shadow"
              onClick={() => setCard((card + 1) % cards.length)}
            />
          </div>
        </div>
      );

    return <img src={welcome} alt="banner"></img>;
  };

  if (!isShown) return <div></div>;

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
