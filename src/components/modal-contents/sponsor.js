import utfpr from "./sponsor-logos/utfpr.png";

import "./sponsor.css";

const Sponsor = () => (
  <div className="sponsor-container">
    <h1>Apoiadores</h1>

    <h2>UTFPR</h2>
    <a
      href="https://utfpr.edu.br/"
      target="_blank"
      rel="noreferrer"
      className="card"
    >
      <img src={utfpr} alt="logo do apoiador" className=" global-shadow" />
    </a>
  </div>
);

export default Sponsor;
