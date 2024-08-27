import React from "react";
import "./Avatar.css";
import img from "./images/image.jpg";

const Avatar = ({ name, skills, title }) => {
  return (
    <div className="avatar">
      <img src={img} alt="Avatar" className="avatar-img" />
      <div className="skills">
        <h2 className="name">{name}</h2>
        <h3 className="title">{title}</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Avatar;
