import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import Footer from "../../components/footer";

import "./styles.css";

export default function Authors(props) {
  const history = useHistory();

  return (
    <div className="schedule">
      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="AUTORES"
          onClick={() => history.push("/")}
        />
        Authors Guide
        <Footer />
      </div>
    </div>
  );
}
