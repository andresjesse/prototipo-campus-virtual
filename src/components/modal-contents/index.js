import MainMenu from "./main-menu";
import blocoA from "./bloco-a"; //TODO: mudar para componente
import BlocoB from "./bloco-b";
import BlocoC from "./bloco-c";
import BlocoD from "./bloco-d";

const modalContents = {
  "main-menu": <MainMenu />,
  "block-a": blocoA,
  "block-b": <BlocoB />,
  "block-c": <BlocoC />,
  "block-d": <BlocoD />,
  "block-e": blocoA,
  "block-f": blocoA,
  "block-h": blocoA,
  "block-r": blocoA,
};

export default modalContents;
