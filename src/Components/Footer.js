import React from "react";
import "./Footer.css";

const Footer = ({ paragraph, isEditMode, onParagraphChange }) => {
  return (
    <div className="footer">
      {isEditMode ? (
        <input
          value={paragraph}
          onChange={(e) => onParagraphChange(e.target.value)}
          rows="3"
        />
      ) : (
        <p>{paragraph}</p>
      )}
    </div>
  );
};

export default Footer;
