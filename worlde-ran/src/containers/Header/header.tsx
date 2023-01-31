import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Help from "../Help/Help";

import "./headers.css";

const Header = () => {
  const [off, setOff] = useState(true);
  const logOut = () => {
    localStorage.clear();
    setOff((current) => !current);
  };
  const email = localStorage.getItem("email");

  return (
    <header className="p-1 mb-3 border-bottom-0">
      <div>
        <div>
          <Link to="/" className="text-white  text-decoration-none">
            Home
          </Link>

          <Nav className="text-white">
            <Nav.Item id="h1">Welcome, {email ? email : "Guest"}!</Nav.Item>
            <div>
              {email ? (
                <Button className="m-3" onClick={logOut}>
                  Logout
                </Button>
              ) : (
                ""
              )}
            </div>
            <Nav.Item>
              <Help />
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
