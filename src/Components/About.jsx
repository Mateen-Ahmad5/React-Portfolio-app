
import "./About.css"

const About= ({heading,paragraph})=> {
  return (
    <div className='about-section'>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </div>
  )
}

export default About
