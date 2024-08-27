import React from "react";
import "./Footer.css";

const Footer = ({ paragraph }) => {
  return (
    <div className="footer">
      <p>{paragraph}</p>
    </div>
  );
};

export default Footer;
