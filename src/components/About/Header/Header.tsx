import { useState } from "react";
import "./Header.css";
import { CiUser } from "react-icons/ci";

const Header = () => {
  const [iconIsOpen, setIconIsopen] = useState(false);

  const handleUserIcon = () => {
    setIconIsopen(!iconIsOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1>Logo</h1>
      </div>
      <nav className="user-icon" onClick={handleUserIcon}>
        <CiUser className="icon" size={50} />
      </nav>
      <ul className={`user-icon-dropdown ${iconIsOpen ? "open" : ""}`}>
        <li>Log In</li>
        <li>Sign Up</li>
      </ul>
    </header>
  );
};

export default Header;
