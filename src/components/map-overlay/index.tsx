import "./styles.css";

type MapOverlayProps = {
  building: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
};

export default function MapOverlay({
  building,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: MapOverlayProps) {
  return (
    <div
      className={`map-overlay ${building}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    ></div>
  );
}
