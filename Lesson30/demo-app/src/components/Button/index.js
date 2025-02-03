import "./styles.css";

export function Button({ label, handleClick, buttonColor, borderColor }) {
  // In react, we use JSX to define the structure of our components
  return (
    <button
      className="btn"
      onClick={handleClick}
      style={{
        backgroundColor: buttonColor,
        color: "white",
        border: `2px solid ${borderColor}`,
      }}
    >
      {label}
    </button>
  );
}
