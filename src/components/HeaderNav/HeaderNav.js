import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./HeaderNav.css";

const HeaderNav = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <h1 className="fs-2 text-main">GoTrip</h1>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="text-decoration-none text-black text-uppercase me-3" to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              className="text-decoration-none text-black text-uppercase me-3"
              to="/items  "
              activeClassName="active"
            >
              items
            </NavLink>
          </Nav>
          {!user ? (
            <NavLink to="/login">
              <Button variant="danger" className="btn-main">
                Login
              </Button>
            </NavLink>
          ) : (
            <Button onClick={logOut}>Log Out</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
