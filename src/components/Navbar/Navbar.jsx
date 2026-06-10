import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Dr. Sadhana Tiwari</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/awards">Awards</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;