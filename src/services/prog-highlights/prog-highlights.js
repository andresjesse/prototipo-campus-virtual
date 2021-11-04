import noPhoto from "./noPhoto.jpg";
import presentations from "./presentations.jpg";

import imgMinicursoLatex from "./imgMinicursoLatex.jpeg";
import imgVisitaIPEC from "./imgVisitaIPEC.jpeg";

import pUTFPR from "./utfpr.jpg";
import pTalk from "./talk.jpg";
import pTalkTable from "./talkTable.jpg";

import pVisit from "./pVisit.jpg";
import pOverleaf from "./overleaf.jpg";

import pPodcast from "./pPodcast.jpg";

const progHighlights = [
  {
    day: "08/11",
    weekDay: "Segunda-Feira",
    prog: [
      {
        from: "9h",
        to: "12h",
        activities: [
          {
            author: "Sessões de Apresentação",
            title: "Consulte a nossa agenda de apresentações.",
            abstract: null,
            photo: presentations,
            link: "https://seisicite2021.gp.utfpr.edu.br/schedule",
            isPresentation: true,
          },
        ],
      },
      {
        from: "13h30",
        to: "17h30",
        activities: [
          {
            author: "Sessões de Apresentação",
            title: "Consulte a nossa agenda de apresentações.",
            abstract: null,
            photo: presentations,
            link: "https://seisicite2021.gp.utfpr.edu.br/schedule",
            isPresentation: true,
          },
        ],
      },
      {
        from: "19h",
        to: "22h",
        activities: [
          {
            author:
              "Prof. Dr. Aldo Nelson Bona, Superintendente de Ciência, Tecnologia e Ensino Superior do Paraná.",
            title: "Abertura do SEI-SICITE 2021: Palestra e Mesa de Debate.",
            abstract:
              "<b>Palestra</b></br></br>Prof. Dr. Aldo Nelson Bona</br></br>Superintendente de Ciência, Tecnologia e Ensino Superior do Paraná</br></br><b>Mesa de Debate</b></br></br>Tema: Pesquisa e extensão para um mundo em transformação</br></br>Prof. Dr. Marcos Flavio de Oliveira Schiefler Filho</br>Reitor da UTFPR</br></br>Prof. Dr. Heron Lima</br>Vice-Reitor da UTFPR</br></br>Celso Góes</br>Prefeito de Guarapuava</br></br>Prof.ª Dra. Claudia Regina Xavier</br>Pró-Reitora de Pesquisa e Pós-Graduação da UTFPR</br></br>Prof. Dr. Rubens de Faria</br>Pró-Reitor de Relações Empresariais e Comunitárias da UTFPR",
            photo: pTalk,
            link: "",
            isPresentation: false,
          },
        ],
      },
    ],
  },
  {
    day: "09/11",
    weekDay: "Terça-Feira",
    prog: [
      {
        from: "9h",
        to: "12h",
        activities: [
          {
            author: "Paulo Cereda",
            title: "Minicurso: Uma aventura tipográfica com LaTeX e Overleaf.",
            abstract:
              "<b>Minicurso: Uma aventura tipográfica com LaTeX e Overleaf</b></br></br>Paulo Cereda</br></br>Este minicurso é uma introdução ao LaTeX, um sistema de tipografia. Na primeira parte da apresentação, aprenderemos a criar nosso primeiro documento, desde os conceitos essenciais até construções mais elaboradas. Veremos as vantagens do uso de LaTeX em documentos acadêmicos - teses, dissertações, relatórios, artigos, etc. Na segunda parte, conheceremos a Overleaf, uma ferramenta online para escrita de documentos LaTeX e como ela pode contribuir para um fluxo de trabalho simplificado e eficiente.</br></br>Paulo é do interior de São Paulo. Entusiasta de software livre, usa LaTeX há mais de 15 anos e é fundador da Island of TeX, uma organização que atua como hub para projetos relacionados a TeX e tipografia. É membro do grupo de usuários TeX do Reino Unido e do conselho do TUG — TeX Users Group. Atua como Community Outreach Coordinator na Overleaf. Pesquisador da área de teoria da computação, fã da Nintendo, movido a Pringles e refrigerante, e colecionador de patos de borracha, Paulo é presença constante na comunidade TeX. </br></br>Lattes: <a href='http://lattes.cnpq.br/9779052569284359' target='_blank'>http://lattes.cnpq.br/9779052569284359</a>. ",
            // photo: imgMinicursoLatex,
            photo: pOverleaf,
            link: "",
            isPresentation: false,
          },
        ],
      },
      {
        from: "13h30",
        to: "17h30",
        activities: [
          {
            author: "Sessões de Apresentação",
            title: "Consulte a nossa agenda de apresentações.",
            abstract: null,
            photo: presentations,
            link: "https://seisicite2021.gp.utfpr.edu.br/schedule",
            isPresentation: true,
          },
        ],
      },
      {
        from: "19h",
        to: "22h",
        activities: [
          {
            author: "BOSCH",
            title:
              "Noite BOSCH: Palestras + Oportunidades (Estágio/Trainee/TCC).",
            abstract: null,
            photo: pTalk,
            link: "",
            isPresentation: false,
          },
        ],
      },
    ],
  },
  {
    day: "10/11",
    weekDay: "Quarta-Feira",
    prog: [
      {
        from: "9h",
        to: "10h",
        activities: [
          {
            author: "Kamila Chagas Peronni",
            title:
              "Visita Técnica: Instituto para Pesquisa do Câncer de Guarapuava (IPEC).",
            abstract:
              "<b>Visita Técnica</b></br></br>Local: Instituto para Pesquisa do Câncer de Guarapuava (IPEC).</br></br>Kamila Chagas Peronni, Pesquisadora IPEC.</br></br> <a href='https://ipec.org.br/'>https://ipec.org.br/</a>",
            //photo: imgVisitaIPEC,
            photo: pVisit,
            link: "",
            isPresentation: false,
          },
        ],
      },
      {
        from: "10h",
        to: "12h",
        activities: [
          {
            author: "Sociedade Brasileira de Bioética",
            title:
              "Mesa Redonda: Transformações tecnológicas e seus desafios bioéticos.",
            abstract:
              "<b>Mesa Redonda</b></br></br>Sociedade Brasileira de Bioética</br></br>Tema:</br>Transformações tecnológicas e seus desafios bioéticos</br></br>Mediação:</br>Prof.ª Dra. Anna Silvia Penteado Setti da Rocha (UTFPR)</br></br>Palestra 1:</br>A Transformação tecnologia e a Humanidade</br>Prof. Dr. Jelson Roberto de Oliveira (PUCPR)</br></br>Palestra 2:</br>Os desafios de uma ética para a civilização tecnológica</br>Prof. Dr. Anor Sganzerla (PUCPR)</br></br></br><a href='https://www.sbbioetica.org.br/Quem-somos/PR'>https://www.sbbioetica.org.br/Quem-somos/PR</a></br>",
            photo: pTalkTable,
            link: "",
            isPresentation: false,
          },
        ],
      },
      {
        from: "13h30",
        to: "17h30",
        activities: [
          {
            author: "Sessões de Apresentação",
            title: "Consulte a nossa agenda de apresentações.",
            abstract: null,
            photo: presentations,
            link: "https://seisicite2021.gp.utfpr.edu.br/schedule",
            isPresentation: true,
          },
        ],
      },
      {
        from: "18h",
        to: "20h",
        activities: [
          {
            author: "Podcast",
            title: "Podcast: Feito por Elas.",
            abstract: null,
            photo: pPodcast,
            link: "",
            isPresentation: false,
          },
        ],
      },
      {
        from: "20h",
        to: "22h",
        activities: [
          {
            author: "Vale do Genoma",
            title: "Mesa Redonda: Vale do Genoma.",
            abstract: null,
            photo: pTalkTable,
            link: "",
            isPresentation: false,
          },
        ],
      },
    ],
  },
  {
    day: "11/11",
    weekDay: "Quinta-Feira",
    prog: [
      {
        from: "9h",
        to: "10h",
        activities: [
          {
            author: "Nara Haberland",
            title:
              "Palestra: Uma via de duas mãos - aprendizados do mundo corporativo para alavancar seu projeto de pesquisa.",
            abstract:
              "<b>Palestra</b></br></br>Uma via de duas mãos - aprendizados do mundo corporativo para alavancar seu projeto de pesquisa.</br></br>''5 lições sobre o que eu aprendi e que faria diferente durante meu mestrado''</br></br>Nara Haberland",
            photo: pTalk,
            link: "",
            isPresentation: false,
          },
        ],
      },
      {
        from: "10h",
        to: "12h",
        activities: [
          {
            author: "Dra. Lyssa Setsuko Sakanaka",
            title:
              "Palestra: CEP on-line: O que preciso fazer para submeter um projeto?",
            abstract:
              "<b>Palestra</b></br></br>CEP on-line: O que preciso fazer para submeter um projeto?</br></br>Dra. Lyssa Setsuko Sakanaka</br></br>Comitê de Ética em Pesquisa envolvendo Seres Humanos (CEP) da Universidade Tecnológica Federal do Paraná (UTFPR)</br></br>A pesquisa científica é a base de quase todo o conhecimento humano. O Comitê de Ética em Pesquisa Envolvendo Seres Humanos da UTFPR (CEP-UTFPR), como instância de controle social e foco nos princípios morais, regula as pesquisas que envolvem seres humanos visando garantir o respeito e a prevenção de danos. Ciência e ética caminham juntas, em busca do crescente progresso sempre em benefício da humanidade e do planeta. E a importância de ambas nunca esteve em tamanha evidência como nos anos de 2020-2021 em que o mundo se viu assolado pela Pandemia de COVID-19. Diante da situação pandêmica, CEP’s e pesquisadores precisaram se adequar a realidade de desenvolvimento de projetos de maneira remota, lançando mão de ferramentas virtuais e digitais. O objetivo desta conversa é apresentar as diretrizes e um check-list para a submissão de trabalhos que envolvem intervenção com seres humanos ao CEP-UTFPR.",
            photo: pTalk,
            link: "",
            isPresentation: false,
          },
        ],
      },
      {
        from: "13h30",
        to: "17h30",
        activities: [
          {
            author: "Sessões de Apresentação",
            title: "Consulte a nossa agenda de apresentações.",
            abstract: null,
            photo: presentations,
            link: "https://seisicite2021.gp.utfpr.edu.br/schedule",
            isPresentation: true,
          },
        ],
      },
      {
        from: "18h30",
        to: "20h",
        activities: [
          {
            author: "BOSCH",
            title: "Painel Alumni.",
            abstract: null,
            photo: pTalk,
            link: "",
            isPresentation: false,
          },
        ],
      },
    ],
  },
  {
    day: "12/11",
    weekDay: "Sexta-Feira",
    prog: [
      {
        from: "9h",
        to: "12h",
        activities: [
          {
            author: "",
            title: "FOREC Fórum Empresarial e Comunitário + Concurso de PICTH.",
            abstract: null,
            photo: presentations,
            link: "",
            isPresentation: false,
          },
        ],
      },
      {
        from: "14h",
        to: "17h30",
        activities: [
          {
            author: "UTFPR",
            title:
              "Atividade Cultural / Cerimônia de Encerramento e Premiação dos Melhores Trabalhos.",
            abstract: null,
            photo: pTalk,
            link: "",
            isPresentation: false,
          },
        ],
      },
    ],
  },
];

export default progHighlights;
