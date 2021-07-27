import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ModalContainer } from "./components/modal";

import Home from "./pages/home";
import CityTour from "./pages/citytour";
import Schedule from "./pages/schedule";

import Prog from "./pages/prog";
import FAQ from "./pages/faq";
import Authors from "./pages/authors";

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
          <Route exact path="/authors">
            <Authors />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ModalContainer>
  );
}
