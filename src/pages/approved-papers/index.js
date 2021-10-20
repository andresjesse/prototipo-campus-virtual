import React from "react";
import { useHistory } from "react-router-dom";

import TopMenu from "../../components/topmenu";
import ApprovedTable from "../../components/approved-table";
import Footer from "../../components/footer";

import "./styles.css";

export default function Page(props) {
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
          title="PUBLICAÇÕES"
          onClick={() => history.push("/")}
        />
        <ApprovedTable />
        <Footer />
      </div>
    </div>
  );
}
