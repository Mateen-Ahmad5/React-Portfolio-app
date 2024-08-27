import "./Header.css"
const Header = ({heading, buttonText,onButtonClick }) => {
  return (
    <div className = "header">
      <h3>{heading}</h3>
      <button className= "btn" onClick={onButtonClick}>{buttonText}</button>
    </div>
  )
}


export default Header
