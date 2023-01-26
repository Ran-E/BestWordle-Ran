import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Nav, Form } from "react-bootstrap";
import "./headers.css";

const Header = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </Link>

          <Nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <Nav.Item>
              <Link to="#" className="nav-link px-2 link-secondary">
                Overview
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#" className="nav-link px-2 link-dark">
                Inventory
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#" className="nav-link px-2 link-dark">
                Customers
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#" className="nav-link px-2 link-dark">
                Products
              </Link>
            </Nav.Item>
          </Nav>

          <Form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <Form.Control
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </Form>

          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">New project...</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
