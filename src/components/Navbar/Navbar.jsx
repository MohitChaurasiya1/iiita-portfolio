import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="logo">Dr. Sadhana Tiwari</div>

      <ul className="nav-links">
        <li><Link to="/" onClick={handleClick}>Home</Link></li>
        <li><Link to="/experience" onClick={handleClick}>Experience</Link></li>
        <li><Link to="/education" onClick={handleClick}>Education</Link></li>
        <li><Link to="/research" onClick={handleClick}>Research</Link></li>
        <li><Link to="/publications" onClick={handleClick}>Publications</Link></li>
        <li><Link to="/achievements" onClick={handleClick}>Achievements & Activities</Link></li>
        <li><Link to="/contact" onClick={handleClick}>Contact</Link></li>
      </ul>

      <div className="mobile-menu">
        <HiMenu
          className="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div className="dropdown">
            <Link to="/" onClick={handleClick}>Home</Link>
            <Link to="/experience" onClick={handleClick}>Experience</Link>
            <Link to="/education" onClick={handleClick}>Education</Link>
            <Link to="/research" onClick={handleClick}>Research</Link>
            <Link to="/publications" onClick={handleClick}>Publications</Link>
            <Link to="/achievements" onClick={handleClick}>Achievements & Activities</Link>
            <Link to="/contact" onClick={handleClick}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;