import "./Header.css"
const Header = ({heading, buttonText }) => {
  return (
    <div className = "header">
      <h3>{heading}</h3>
      <button className= "btn">{buttonText}</button>
    </div>
  )
}


export default Header
