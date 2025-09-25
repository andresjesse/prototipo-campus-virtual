import MainMenu from "./main-menu";

import BlocoA from "./bloco-a";
import BlocoB from "./bloco-b";
import BlocoC from "./bloco-c";
import BlocoD from "./bloco-d";
import BlocoE from "./bloco-e";
import BlocoF from "./bloco-f";
import BlocoH from "./bloco-h";
import BlocoR from "./bloco-r";
import BlocoP from "./bloco-p";
import RU from "./ru";

import Stand from "./stand";
import Sponsor from "./sponsor";
import Contact from "./contact";
import CalendarSVG from "./calendar-svg";

const modalContents = {
  "main-menu": <MainMenu />,
  "block-a": <BlocoA />,
  "block-b": <BlocoB />,
  "block-c": <BlocoC />,
  "block-d": <BlocoD />,
  "block-e": <BlocoE />,
  "block-f": <BlocoF />,
  "block-h": <BlocoH />,
  "block-r": <BlocoR />,
  "block-p": <BlocoP />,
  ru: <RU />,
  stand: <Stand />,
  sponsor: <Sponsor />,
  contact: <Contact />,
  "calendar-svg": <CalendarSVG />,
};

export default modalContents;
