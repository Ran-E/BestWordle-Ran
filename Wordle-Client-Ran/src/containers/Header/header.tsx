import { useState } from "react";
import { Button, Nav, Navbar, NavItem, NavLink } from "react-bootstrap";

import Help from "../Help/Help";

import "./headers.scss";

const Header = () => {
  const [, setOff] = useState(true);
  const logOut = () => {
    localStorage.clear();
    setOff((current) => !current);
  };
  const email = localStorage.getItem("email");

  return (
    <Navbar
      sticky="top"
      className="Navbar text-white ml-auto align-items-center"
    >
      <NavLink href="/" className="general brand text-white">
        Home
      </NavLink>
      <Nav.Item className="general">
        Welcome, {email ? email : "Guest"}!
      </Nav.Item>
      {email ? (
        <Button
          variant="#0038b8"
          className="general text-white"
          onClick={logOut}
        >
          Logout
        </Button>
      ) : (
        ""
      )}
      <Button className="general">
        <Help />
      </Button>
    </Navbar>
  );
};

export default Header;
