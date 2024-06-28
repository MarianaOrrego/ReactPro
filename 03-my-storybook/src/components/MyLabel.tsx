import "./MyLabel.css";

export interface Props {
  /**
   * Texto to display
   */
  label: string;
  /**
   * Size of the text
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * All caps, if true the text will be in uppercase
   */
  allCaps?: boolean;
  /**
   * Color of the button
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Font color of the text
   */
  fontColor?: string;
}

const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
