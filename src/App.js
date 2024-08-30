import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Avatar from "./Components/Avatar";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  const [headerHeading, setHeaderHeading] = useState("My Portfolio");
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  const BUTTON_TEXT = isEditMode ? "Save" : "Edit";

  const [heading, setHeading] = useState("About Us");
  const [paragraph, setParagraph] = useState(
    "I am a MERN Stack Developer with expertise in HTML, CSS, JavaScript, and React. I create intuitive, responsive, and dynamic web applications. My focus is on writing clean, efficient code and delivering engaging user experiences. With a keen eye for detail, I aim to bridge the gap between design and technology. I am always eager to learn and adapt to new challenges in the ever-evolving field of web development."
  );

  const EXPERIENCE_HEADING = "Experience";
  const [companyName, setCompanyName] = useState("CodeNinja Software House");
  const [startDate, setStartDate] = useState("06/01/2024");
  const [endDate, setEndDate] = useState("08/31/2024");
  const [description, setDescription] = useState(
    "Worked as a MERN Stack Developer, building responsive web applications."
  );

  const [avatarName, setAvatarName] = useState("Mateen Ahmad");
  const [avatarTitle, setAvatarTitle] = useState("I'm a Front-End Developer");
  const [avatarSkills, setAvatarSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "React.js",
  ]);

  const [footerText, setFooterText] = useState(
    "2023 My Portfolio. All rights reserved."
  );

  return (
    <div>
      <Header
        heading={headerHeading}
        buttonText={BUTTON_TEXT}
        onButtonClick={toggleEditMode}
        isEditMode={isEditMode}
        onHeadingChange={setHeaderHeading}
      />
      <div className="container">
        <div>
          <About
            heading={heading}
            paragraph={paragraph}
            isEditMode={isEditMode}
            onHeadingChange={setHeading}
            onParagraphChange={setParagraph}
          />
          <Experience
            heading={EXPERIENCE_HEADING}
            companyName={companyName}
            startDate={startDate}
            endDate={endDate}
            description={description}
            isEditMode={isEditMode}
            onCompanyNameChange={setCompanyName}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onDescriptionChange={setDescription}
          />
        </div>

        <Avatar
          name={avatarName}
          title={avatarTitle}
          skills={avatarSkills}
          isEditMode={isEditMode}
          onNameChange={setAvatarName}
          onTitleChange={setAvatarTitle}
          onSkillsChange={setAvatarSkills}
        />
      </div>
      <Footer
        paragraph={footerText}
        isEditMode={isEditMode}
        onParagraphChange={setFooterText}
      />
    </div>
  );
}

export default App;
