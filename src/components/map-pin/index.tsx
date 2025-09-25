import type { ReactNode } from "react";
import "./styles.css";

type MapPinProps = {
  building: string;
  letter: ReactNode;
  text: string;
  isActive: boolean;
};

export default function MapPin({
  building,
  letter,
  text,
  isActive,
}: MapPinProps) {
  return (
    <div className={`pin-container ${building}`}>
      <div className={`pin ${isActive ? "active" : ""}`}>
        <div className="pin-text">{text}</div>
        <div className={`pin-letter ${isActive ? "" : "active"}`}>{letter}</div>
      </div>
      <div className="pin-stick"></div>
    </div>
  );
}
