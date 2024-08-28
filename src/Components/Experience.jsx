import React from "react";
import "./Experience.css";

const Experience = ({ heading, paragraph }) => {
  return (
    <>
      <div className="experience-section">
        <h3>{heading}</h3>
        <form className="experience-form">
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" value="" />
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" value="" />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" value="" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value=""></textarea>
          </div>
         
        </form>
        <button type="submit">Save</button>
      </div>
    </>
  );
};

export default Experience;
