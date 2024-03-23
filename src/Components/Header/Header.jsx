import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <h1><span>My Website</span></h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/user/1'>User Details</NavLink>
        {/* <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/user/1'>User Detail</Link> */}
      </nav>
    </div>
  );
};

export default Header;