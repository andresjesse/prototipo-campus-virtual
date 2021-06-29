import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import ProgMain from "../../components/prog-main";
import Footer from "../../components/footer";

import "./styles.css";

export default function Prog(props) {
  const history = useHistory();

  return (
    <div className="schedule">
      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="PROGRAMAÇÃO"
          onClick={() => history.push("/")}
        />

        <ProgMain />

        <Footer />
      </div>
    </div>
  );
}
