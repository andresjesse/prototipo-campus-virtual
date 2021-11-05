import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import WeekCalendar from "../../components/week-calendar";
import Footer from "../../components/footer";

import "./styles.css";

export default function Prog(props) {
  const history = useHistory();

  return (
    <div className="schedule">
      <div
        className="modal-fullscreen-background"
        onClick={() => history.push("/")}
      ></div>

      <div className="components-overlay">
        <TopMenu
          icon="arrow"
          title="CRONOGRAMA"
          onClick={() => history.push("/")}
        />

        <WeekCalendar />
        <Footer />
      </div>
    </div>
  );
}
