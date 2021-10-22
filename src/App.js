import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ModalContainer } from "./components/modal";

import Home from "./pages/home";
import CityTour from "./pages/citytour";
import Schedule from "./pages/schedule";

import Prog from "./pages/prog";
import FAQ from "./pages/faq";
import ApprovedPapers from "./pages/approved-papers";
import TutorialSubmissao from "./pages/tutorial-submissao";
import TutorialMetadados from "./pages/tutorial-metadados";
import TutorialAvaliacao from "./pages/tutorial-avaiacao";
import TutorialCorrecaoSubmissao from "./pages/tutorial-correcao-submissao";
import TutorialGravacaoVideo from "./pages/tutorial-gravacao-video";
import CadastroAvaliadores from "./pages/cadastro-avaliadores";
import ChecklistAvaliadoresSICITE from "./pages/checklist-avaliadores-sicite";
import PDFViewer from "./pages/pdfviewer";

import BackOffice from "./pages/backoffice";

export default function App() {
  const updateScreenSizeCSS = () => {
    document.documentElement.style.setProperty("--screen-x", window.innerWidth);

    document.documentElement.style.setProperty(
      "--screen-y",
      window.innerHeight
    );
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateScreenSizeCSS);
    updateScreenSizeCSS();
  }, []);

  return (
    <ModalContainer>
      <Router>
        <Switch>
          <Route exact path="/citytour">
            <CityTour />
          </Route>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
          <Route exact path="/prog">
            <Prog />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/approved-papers">
            <ApprovedPapers />
          </Route>
          <Route exact path="/tutorial-submissao">
            <TutorialSubmissao />
          </Route>
          <Route exact path="/tutorial-metadados">
            <TutorialMetadados />
          </Route>
          <Route exact path="/tutorial-avaliacao">
            <TutorialAvaliacao />
          </Route>
          <Route exact path="/tutorial-correcao-submissao">
            <TutorialCorrecaoSubmissao />
          </Route>
          <Route exact path="/tutorial-gravacao-video">
            <TutorialGravacaoVideo />
          </Route>
          <Route exact path="/cadastro-avaliadores">
            <CadastroAvaliadores />
          </Route>
          <Route exact path="/checklist-avaliadores-sicite">
            <ChecklistAvaliadoresSICITE />
          </Route>
          <Route exact path="/pdf">
            <PDFViewer />
          </Route>
          <Route exact path="/backoffice">
            <BackOffice />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ModalContainer>
  );
}
