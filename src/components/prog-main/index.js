import React from "react";

import progHighlights from "../../services/prog-highlights/prog-highlights";

import icClock from "../../assets/icons/ic-clock.png";

import "./styles.css";
import "./tablesgenerator.css";
import "./cards.css";

const Activity = ({ activity }) => {
  return (
    <div className="row">
      <img src={activity.photo} alt="foto do palestrante" className="photo" />

      <div className="activity-info">
        <span>{activity.author}</span>
        <b>
          <span>{activity.title}</span>
        </b>
        <a href={activity.link}>{activity.link}</a>
      </div>
    </div>
  );
};

const ProgTime = ({ prog }) => {
  return (
    <>
      <div className="times">
        <img src={icClock} alt="ícone relógio" />
        <span>{prog.from}</span>-<span>{prog.to}</span>
      </div>

      {prog.activities.map((activity, index) => (
        <Activity key={index} activity={activity} />
      ))}
    </>
  );
};

const Highlights = function () {
  const [day, setDay] = React.useState(0);

  return (
    <div className="highlights-container">
      <div className="tabs">
        {progHighlights.map((d, index) => {
          return (
            <button
              key={index}
              className={`tab ${index === day ? "active" : ""}`}
              onClick={() => setDay(index)}
            >
              {d.day}
            </button>
          );
        })}
      </div>

      {progHighlights[day].prog.map((p, index) => {
        return <ProgTime key={index} prog={p} />;
      })}
    </div>
  );
};

//-------- END Highlights

export default function ProgMain(props) {
  return (
    <div className="big-container global-shadow">
      <Highlights />

      <table className="tg">
        <thead>
          <tr>
            <th className="tg-7zrl"></th>
            <th className="tg-8d8j">Seg</th>
            <th className="tg-8d8j">Ter</th>
            <th className="tg-8d8j">Qua</th>
            <th className="tg-8d8j">Qui</th>
            <th className="tg-8d8j">Sex</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-8d8j">8h</td>
            <td className="tg-7zrl"></td>
            <td className="tg-26d4" rowSpan="5">
              MINICURSO
            </td>
            <td className="tg-cly1"></td>
            <td className="tg-cly1"></td>
            <td className="tg-26d4" rowSpan="5">
              MINICURSO
            </td>
          </tr>
          <tr>
            <td className="tg-8d8j">9h</td>
            <td className="tg-7zrl"></td>
            <td className="tg-cly1"></td>
            <td className="tg-cly1"></td>
          </tr>
          <tr>
            <td className="tg-8d8j">10h</td>
            <td className="tg-9bfl" rowSpan="2">
              PALESTRA
            </td>
            <td className="tg-cly1"></td>
            <td className="tg-adee" rowSpan="3">
              SESSÕES DE APRESENTAÇÃO <br />
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <td className="tg-8d8j">11h</td>
            <td className="tg-02pm" rowSpan="2">
              MESA/PALESTRA
            </td>
          </tr>
          <tr>
            <td className="tg-8d8j">12h</td>
            <td className="tg-cly1"></td>
          </tr>
          <tr>
            <td className="tg-7zrl"></td>
            <td className="tg-7zrl"></td>
            <td className="tg-7zrl"></td>
            <td className="tg-7zrl"></td>
            <td className="tg-7zrl"></td>
            <td className="tg-7zrl"></td>
          </tr>
          <tr>
            <td className="tg-8d8j">13h30</td>
            <td className="tg-adee" rowSpan="5">
              SESSÕES DE APRESENTAÇÃO <br />
              <br />
              <br />
            </td>
            <td className="tg-adee" rowSpan="5">
              SESSÕES DE APRESENTAÇÃO <br />
              <br />
              <br />
            </td>
            <td className="tg-adee" rowSpan="5">
              SESSÕES DE APRESENTAÇÃO <br />
              <br />
              <br />
            </td>
            <td className="tg-adee" rowSpan="5">
              SESSÕES DE APRESENTAÇÃO <br />
              <br />
              <br />
            </td>
            <td className="tg-02pm" rowSpan="3">
              MESA/PALESTRA
            </td>
          </tr>
          <tr>
            <td className="tg-8d8j">14h30</td>
          </tr>
          <tr>
            <td className="tg-8d8j">15h30</td>
          </tr>
          <tr>
            <td className="tg-8d8j">16h30</td>
            <td className="tg-ecof" rowSpan="2">
              ATIVIDADE CULTURAL
            </td>
          </tr>
          <tr>
            <td className="tg-8d8j">17h30</td>
          </tr>
          <tr>
            <td className="tg-8d8j">18h</td>
            <td className="tg-kwts">
              <span style={{ backgroundColor: "#CC4125" }}>CAFE </span>
            </td>
            <td className="tg-kwts">
              <span style={{ backgroundColor: "#CC4125" }}>CAFE </span>
            </td>
            <td className="tg-kwts">
              <span style={{ backgroundColor: "#CC4125" }}>CAFE </span>
            </td>
            <td className="tg-kwts">
              <span style={{ backgroundColor: "#CC4125" }}>CAFE </span>
            </td>
            <td className="tg-kwts">
              <span style={{ backgroundColor: "#CC4125" }}>CAFE </span>
            </td>
          </tr>
          <tr>
            <td className="tg-8d8j">19h</td>
            <td className="tg-fn3j">
              <span style={{ backgroundColor: "#38761D" }}>ABERTURA</span>
            </td>
            <td className="tg-g3cq" rowSpan="4">
              MINICURSO
            </td>
            <td className="tg-adee" rowSpan="3">
              SESSÕES DE APRESENTAÇÃO{" "}
            </td>
            <td className="tg-g3cq" rowSpan="4">
              MINICURSO
            </td>
            <td className="tg-rcp7">
              <span style={{ backgroundColor: "#C9DAF8" }}>
                CERIMÔNIA DE ENCERRAMENTO E PREMIAÇÃO DOS MELHORES TRABALHOS
              </span>
            </td>
          </tr>
          <tr>
            <td className="tg-8d8j">20h</td>
            <td className="tg-rcp7">
              <span style={{ backgroundColor: "#C9DAF8" }}>PALESTRA</span>
            </td>
            <td className="tg-7zrl"></td>
          </tr>
          <tr>
            <td className="tg-8d8j">21h</td>
            <td className="tg-7zrl"></td>
            <td className="tg-7zrl"></td>
          </tr>
          <tr>
            <td className="tg-8d8j">22h</td>
            <td className="tg-7zrl"></td>
            <td className="tg-7zrl"></td>
            <td className="tg-7zrl"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
