import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default NavBar;