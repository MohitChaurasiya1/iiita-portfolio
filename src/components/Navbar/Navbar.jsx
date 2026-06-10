import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Dr. Sadhana Tiwari</div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/achievements">Achievements & Activities</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <HiMenu
          className="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div className="dropdown">
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/education">Education</Link>
            <Link to="/research">Research</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/achievements">Achievements & Activities</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;