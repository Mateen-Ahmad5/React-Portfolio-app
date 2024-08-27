import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Avatar from "./Components/Avatar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const HEADING_TEXT = "My Portfolio";
  const SIGNUP_BUTTON_TEXT = "Sign up";

  const ABOUT_HEADING = "About Us";
  const ABOUT_PARAGRAPH = `JavaScript, and React. I create intuitive, responsive, and dynamic
    web applications. My focus is on writing clean, efficient code and
    delivering engaging user experiences. With a keen eye for detail,
    I aim to bridge the gap between design and technology. I am always
    eager to learn and adapt to new challenges in the ever-evolving
    field of web development. We are a team of passionate developers building awesome applications.`;

  const EXPERIENCE_HEADING = "Experience";
  const EXPERIENCE_PARAGRAPH = "Add Experience";

  const AVATAR_NAME = "Mateen Ahmad";
  const AVATAR_TITLE = "I'm a Front-End Developer";
  const AVATAR_SKILLS = ["HTML", "CSS", "JavaScript", "Tailwind", "React.js"];

  return (
    <div>
      <Header heading={HEADING_TEXT} buttonText={SIGNUP_BUTTON_TEXT} />
      <div className="container">
        <div>
          <About heading={ABOUT_HEADING} paragraph={ABOUT_PARAGRAPH} />
          <Experience
            heading={EXPERIENCE_HEADING}
            paragraph={EXPERIENCE_PARAGRAPH}
          />
        </div>

        <Avatar
          name={AVATAR_NAME}
          title={AVATAR_TITLE}
          skills={AVATAR_SKILLS}
        />
      </div>
      <Footer paragraph="Copy right 2020 " />
    </div>
  );
}

export default App;
