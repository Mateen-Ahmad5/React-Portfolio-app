import "./Header.css";
const Header = ({
  heading,
  buttonText,
  onButtonClick,
  onHeadingChange,
  isEditMode,
}) => {
  return (
    <div className="header">
      {isEditMode ? (
        <input
          type="text"
          value={heading}
          onChange={(e) => onHeadingChange(e.target.value)}
          placeholder="Edit Heading"
        />
      ) : (
        <h3>{heading}</h3>
      )}
      <button className="btn" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Header;
