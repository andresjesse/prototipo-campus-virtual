import noPhoto from "./noPhoto.jpg";
import presentations from "./presentations.jpg";

import pCiclano from "./pCiclano.jpg";
import pFulano from "./pFulano.jpg";

const progHighlights = [
  {
    day: "08/11",
    weekDay: "Segunda-Feira",
    prog: [
      {
        from: "8h",
        to: "9h",
        activities: [
          {
            author: "Dr. Ciclano de Tal (UTFPR)",
            title:
              "Especificações técnicas sem sentido: elas são mesmo necessárias no contexto descontextualizado da globalização regional?",
            abstract:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: pCiclano,
            link: "http://www.youtube.com",
          },
          {
            author: "Dr. Fulano de Tal (UTFPR)",
            title:
              "Título da palestra: uma aventura pela programação com JavaScript ES6 e React",
            abstract:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: pFulano,
            link: "http://www.youtube.com",
          },
        ],
      },
      {
        from: "9h",
        to: "10h",
        activities: [
          {
            author: "Dr. Beltrano de Tal (UTFPR)",
            title:
              "Especificações técnicas sem sentido: elas são mesmo necessárias no contexto descontextualizado da globalização regional?",
            abstract:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: noPhoto,
            link: "http://www.youtube.com",
          },
        ],
      },
      {
        from: "10h",
        to: "12h",
        activities: [
          {
            author: "Sessões de apresentações",
            title: "Consulte a nossa agenda de apresentações",
            abstract: "",
            photo: presentations,
            link: "/schedule",
          },
        ],
      },
    ],
  },
  {
    day: "09/11",
    weekDay: "Terça-Feira",
  },
  {
    day: "10/11",
    weekDay: "Quarta-Feira",
  },
  {
    day: "11/11",
    weekDay: "Quinta-Feira",
  },
  {
    day: "12/11",
    weekDay: "Sexta-Feira",
  },
];

export default progHighlights;
