import "./About.css";

const About = ({ heading, paragraph, isEditMode, onParagraphChange }) => {
  return (
    <div className="about-section">
      <h3>{heading}</h3>
      {isEditMode ? (
        <textarea
          value={paragraph}
          onChange={(e) => onParagraphChange(e.target.value)}
          placeholder="Edit Paragraph"
          rows={6}
          cols={300}
        />
      ) : (
        <p>{paragraph}</p>
      )}
    </div>
  );
};

export default About;
