import React from "react";
import "./Avatar.css";
import img from "./images/image.jpg";

const Avatar = ({
  name,
  skills,
  title,
  onNameChange,
  onTitleChange,
  onSkillsChange,
  isEditMode,
}) => {
  return (
    <div className="avatar">
      <img src={img} alt="Avatar" className="avatar-img" />
      <div className="skills">
        {isEditMode ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              className="avatar-input"
            />
            <input
              type="text"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              className="avatar-input"
            />
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => {
                      const updatedSkills = [...skills];
                      updatedSkills[index] = e.target.value;
                      onSkillsChange(updatedSkills);
                    }}
                    className="skill-input"
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h2 className="name">{name}</h2>
            <h3 className="title">{title}</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Avatar;
