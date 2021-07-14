import MainMenu from "./main-menu";

import BlocoA from "./bloco-a";
import BlocoB from "./bloco-b";
import BlocoC from "./bloco-c";
import BlocoD from "./bloco-d";
import BlocoE from "./bloco-e";
import BlocoF from "./bloco-f";
import BlocoH from "./bloco-h";
import BlocoR from "./bloco-r";

import Stand from "./stand";
import Sponsor from "./sponsor";

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
  stand: <Stand />,
  sponsor: <Sponsor />,
};

export default modalContents;
