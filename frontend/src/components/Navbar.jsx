import { scrollToSection } from "../utils/scrollToSection"; // Used later for scrolling
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="brand">
          <h1>GDGoC</h1>
        </div>
        <div className="left">
          <p className="navbarTab clickable">HOME</p>
          <p className="navbarTab clickable">APPLY</p>
          <p className="navbarTab clickable">EVENTS</p>
          <p className="navbarTab clickable">CONTACT</p>
        </div>
        <div className="right">
          <p className="navbarTab clickable">MORE</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
