import React from "react";
import "./Experience.css";

const Experience = ({ heading, paragraph }) => {
  return (
    <div className="experience-section">
      <h3>{heading}</h3>
      <div className="paragraph">
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Experience;
