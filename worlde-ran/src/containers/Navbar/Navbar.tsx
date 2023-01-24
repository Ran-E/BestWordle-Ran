import React, { useState } from "react";
import "../Navbar/navbar.scss";
import Help from "../Help/Help";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleHelpModal = () => {
    setShowHelpModal(!showHelpModal);
  };

  return (
    <nav className={`navbar${isDarkMode ? " bg-gray-800" : ""}`}>
      <div className="navbar-left">
        <span className="logo">My App</span>
        {isLoggedIn && (
          <span className="user-name">{/* insert user name here */}</span>
        )}
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <button className="login-button" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <span className="navbar-item">
            <button
              className="login-button"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          </span>
        )}
        <span className="navbar-item" onClick={toggleHelpModal}>
          Help
        </span>
        <label
          htmlFor="dark-mode-toggle"
          className="dark-mode-toggle navbar-item"
        >
          <input
            type="checkbox"
            id="dark-mode-toggle"
            onChange={toggleDarkMode}
            checked={isDarkMode}
          />{" "}
          Dark mode
        </label>
      </div>
      {showHelpModal && <Help onClose={toggleHelpModal} />}
    </nav>
  );
};
export default Navbar;
