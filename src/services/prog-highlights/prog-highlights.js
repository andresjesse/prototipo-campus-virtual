// Abaixo são os imports dos ícones/imagens disponíveis.
import imgPresentation from './icons/imgPresentation.jpg';
import pLeaf from './icons/overleaf.jpg';
import pPodcast from './icons/pPodcast.jpg';
import pVisit from './icons/pVisit.jpg';
import pTalk from './icons/talk.jpg';
import pTalkTable from './icons/talkTable.jpg';

import noPhoto from './imgs/noPhoto.jpg';
import placeholder1 from './imgs/placeholder1.jpg';
import placeholder2 from './imgs/placeholder2.jpg';
import placeholder3 from './imgs/placeholder3.jpg';

const conteudoPlaceholder =
  '<b>Placeholder</b></br></br>Ille vivere. Ut ad te quaerebam ... purgare caeli. Sunt uh ... nonnullus propter errorem qui de rebus inter nos et iacere puto suus in causa, id est in mensa.</br></br>';

const progHighlights = [
  {
    day: '08/11',
    weekDay: 'Segunda-Feira',
    prog: [
      {
        from: '9h',
        to: '12h',
        activities: [
          {
            author: 'Texto sem destaque',
            title: 'Texto em negrito',
            abstract:
              '<b>Exemplo</b></br></br>O que estiver aqui dentro será aberto em novo modal</br></br>',
            photo: imgPresentation,
            link: 'https://portal.utfpr.edu.br/cursos/estudenautfpr/vestibular/vestibular',
            isPresentation: false, // Altera se será exibido "Link de Acesso" ou "Ir para Agenda" definido em src\components\prog-main\Activity.js
          },
        ],
      },
      {
        from: '13h30',
        to: '17h30',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: conteudoPlaceholder,
            photo: pLeaf,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: true,
          },
        ],
      },
      {
        from: '19h',
        to: '21h',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: conteudoPlaceholder,
            photo: placeholder1,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: false,
          },
        ],
      },
    ],
  },
  {
    day: '09/11',
    weekDay: 'Terça-Feira',
    prog: [
      {
        from: '9h',
        to: '12h',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: conteudoPlaceholder,
            photo: placeholder2,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: false,
          },
        ],
      },
      {
        from: '13h30',
        to: '17h30',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: null,
            photo: pPodcast,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: true,
          },
        ],
      },
      {
        from: '19h',
        to: '21h',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: null,
            photo: placeholder3,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: false,
          },
        ],
      },
    ],
  },
  {
    day: '10/11',
    weekDay: 'Quarta-Feira',
    prog: [
      {
        from: '9h',
        to: '10h',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: conteudoPlaceholder,
            photo: placeholder1,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: false,
          },
        ],
      },
      {
        from: '10h',
        to: '12h',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: null,
            photo: noPhoto,
            link: '/redirect?to=mesa-sbb',
            isPresentation: false,
          },
        ],
      },
      {
        from: '13h30',
        to: '17h30',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: null,
            photo: pVisit,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: true,
          },
        ],
      },
      {
        from: '18h',
        to: '20h',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: conteudoPlaceholder,
            photo: pTalk,
            link: '/redirect?to=podcast',
            isPresentation: false,
          },
        ],
      },
      {
        from: '20h',
        to: '22h',
        activities: [
          {
            author: 'Heisenberg librantur in se quatuor',
            title: 'Ut terrorem facit, qui quid. Terrent!',
            abstract: conteudoPlaceholder,
            photo: pTalkTable,
            link: '/redirect?to=mesa-vale-genoma',
            isPresentation: false,
          },
        ],
      },
    ],
  },
];

export default progHighlights;
