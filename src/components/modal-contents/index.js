import MainMenu from "./main-menu";
import blocoA from "./bloco-a"; //TODO: mudar para componente
import BlocoB from "./bloco-b";

const modalContents = {
  "main-menu": <MainMenu />,
  "block-a": blocoA,
  "block-b": <BlocoB />,
  "block-c": blocoA,
  "block-d": blocoA,
  "block-e": blocoA,
  "block-f": blocoA,
  "block-h": blocoA,
  "block-r": blocoA,
};

export default modalContents;
