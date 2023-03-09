import { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Help from "../Help/Help";

import "./headers.scss";

const Header = () => {
  const [off, setOff] = useState(true);
  const logOut = () => {
    localStorage.clear();
    setOff((current) => !current);
  };
  const email = localStorage.getItem("email");

  return (
    <header>
      <Nav className="text-white ml-auto align-items-center">
        <Navbar.Brand href="/" className="left brand text-white">
          Home
        </Navbar.Brand>
        <Nav.Item className="left">
          Welcome, {email ? email : "Guest"}!
        </Nav.Item>
        {email ? (
          <Button variant="#0038b8" className="text-white" onClick={logOut}>
            Logout
          </Button>
        ) : (
          ""
        )}
        <Nav.Item className="help">
          <Help />
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
