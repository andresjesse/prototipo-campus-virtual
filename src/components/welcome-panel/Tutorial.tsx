import React from "react";

import card1 from "./tutorial-card1.png";
import card2 from "./tutorial-card2.png";
import card3 from "./tutorial-card3.png";
import card4 from "./tutorial-card4.png";
import card5 from "./tutorial-card5.png";

import icArrow from "../../assets/icons/ic-arrow.png";

const cards = [card1, card2, card3, card4, card5];

type TutorialProps = {
  onFinish: () => void;
};

const Tutorial = function ({ onFinish }: TutorialProps) {
  const [card, setCard] = React.useState(0);

  return (
    <div className="tutorial-container">
      <h2>Primeira vez por aqui?</h2>
      <h3>Conheça nosso Campus Virtual:</h3>

      <div className="cards">
        <img
          src={icArrow}
          alt="arrow left"
          className="arrow global-shadow"
          style={{ opacity: card > 0 ? 1 : 0.5 }}
          onClick={() => {
            if (card > 0) setCard(card - 1);
          }}
        />

        <img
          src={cards[card]}
          alt="card tutorial"
          className="card-img"
          onClick={() => {
            if (card == cards.length - 1) onFinish();
          }}
        />

        <img
          src={icArrow}
          alt="arrow left"
          className="arrow arrow-right global-shadow"
          onClick={() => {
            if (card < cards.length - 1) setCard(card + 1);
            else onFinish();
          }}
        />
      </div>
    </div>
  );
};

export default Tutorial;
