import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";

import Footer from "../../components/footer";

import "./styles.css";

export default function CityTour(props) {
  const history = useHistory();

  return (
    <div className="city-tour">
      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="PROGRAMAÇÃO"
          onClick={() => history.push("/")}
        />

        <Footer />
      </div>
    </div>
  );
}
