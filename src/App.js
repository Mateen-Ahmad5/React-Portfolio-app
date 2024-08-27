import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Avatar from "./Components/Avatar";
import Footer from "./Components/Footer";
import "./App.css";


function App() {
  const HEADING_TEXT = "My Portfolio";
  const SIGNUP_BUTTON_TEXT = "Sign up";

  return (
    <div>
      <Header heading={HEADING_TEXT} buttonText={SIGNUP_BUTTON_TEXT} />
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
