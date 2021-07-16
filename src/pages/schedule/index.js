import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import ScheduleTable from "../../components/schedule-table";
import Footer from "../../components/footer";

import "./styles.css";

export default function CityTour(props) {
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
          title="AGENDA"
          onClick={() => history.push("/")}
        />

        <ScheduleTable />

        <Footer />
      </div>
    </div>
  );
}
