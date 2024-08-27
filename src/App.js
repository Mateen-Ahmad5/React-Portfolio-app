import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Avatar from "./Components/Avatar";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };


  const HEADING_TEXT = "My Portfolio";
  const Edit_BUTTON_TEXT = isEditMode ? "Save" : "Edit";

  return (
    <div>
      <Header heading={HEADING_TEXT} 
      buttonText={Edit_BUTTON_TEXT} 
      onButtonClick={toggleEditMode}/>
      <div className="container" style={{ display: "flex" }}>
        <div>
          <About
            heading="About Us"
            paragraph=" JavaScript, and React. I create intuitive, responsive, and dynamic
              web applications. My focus is on writing clean, efficient code and
              delivering engaging user experiences. With a keen eye for detail,
              I aim to bridge the gap between design and technology. I am always
              eager to learn and adapt to new challenges in the ever-evolving
              field of web development.We are a team of passionate developers building awesome applications."
          />
          <Experience heading="Experience" paragraph="add Experience" />
        </div>

        <Avatar
          name="Mateen Ahmad"
          title=" I'am Front-End Developer"
          skills={["HTML", "CSS", "JavaScript", "Tailwind", "React.js"]}
        />
      </div>
      <Footer paragraph="Copy right 2020 " />
    </div>
  );
}

export default App;
