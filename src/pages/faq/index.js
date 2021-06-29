import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import Footer from "../../components/footer";

import "./styles.css";

export default function FAQ(props) {
  const history = useHistory();

  return (
    <div className="schedule">
      <div className="components-overlay">
        <TopMenu icon="arrow" title="FAQ" onClick={() => history.push("/")} />
        FAQ
        <Footer />
      </div>
    </div>
  );
}
