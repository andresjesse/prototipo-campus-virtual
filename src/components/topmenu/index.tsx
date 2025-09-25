import logo from "./logo.png";

import icArrow from "../../assets/icons/ic-arrow.png";
import icMenu from "../../assets/icons/ic-menu.png";

import "./styles.css";

const icons = {
  default: icMenu,
  arrow: icArrow,
};

type TopMenuProps = {
  title: string;
  icon: "arrow" | "default";
  onClick: () => void;
};

export default function TopMenu({ title, icon, onClick }: TopMenuProps) {
  return (
    <div className="topmenu global-shadow">
      <img src={logo} className="logo" alt="logo do evento" />

      <div className="title">{title}</div>

      <div className="right-options">
        <div className="divider"></div>

        <img
          src={icons[icon]}
          alt="icone do menu"
          className="ic-menu"
          onClick={onClick}
        />
      </div>
    </div>
  );
}
