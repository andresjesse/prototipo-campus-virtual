import Activity from "./Activity";

import icClock from "../../assets/icons/ic-clock.png";

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

export default ProgTime;
