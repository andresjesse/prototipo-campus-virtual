import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ModalContainer } from "./components/modal";

import Home from "./pages/home";
import CityTour from "./pages/citytour";
import Schedule from "./pages/schedule";
import About from "./pages/about";
import FAQ from "./pages/faq";

export default function App() {
  return (
    <ModalContainer>
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/citytour">
            <CityTour />
          </Route>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ModalContainer>
  );
}
