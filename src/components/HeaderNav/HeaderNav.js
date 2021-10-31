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
            <NavLink className="text-decoration-none  t me-3" to="/home" activeStyle={{ color: "#ff3344" }}>
              Home
            </NavLink>
            <NavLink className="text-decoration-none  t me-3" to="/allEvents" activeStyle={{ color: "#ff3344" }}>
              All Events
            </NavLink>
            <NavLink className="text-decoration-none  t me-3" to="/about" activeStyle={{ color: "#ff3344" }}>
              About
            </NavLink>
          </Nav>
          {/* SHOW LOGIN OR LOGOUT BUTTON BASE ON LOGIN STATUS */}
          {!user ? (
            <NavLink to="/login">
              <Button variant="outline" className="rounded-pill btn-main p-2 px-3">
                <i className="bi bi-person"></i>
                &nbsp;Login Now
              </Button>
            </NavLink>
          ) : (
            <div className="user d-flex">
              <Button onClick={logOut} variant="outline" className="rounded-pill btn-main p-2 px-3">
                Log Out&nbsp;
                <i className="bi bi-box-arrow-right"></i>
              </Button>

              {/* AVATAR  */}
              <div className=" user-icon ms-3">
                <img
                  title={user.email}
                  src={user.photoURL ? user.photoURL : "https://i.ibb.co/4NM5vPL/Profile-avatar-placeholder-large.png"}
                  alt="user avatar"
                />
                <div className="user-info">
                  <h4 className="mb-1">{user.displayName ? user.displayName : "Anonymous"}</h4>
                  <h6 className="mb-2">{user.email}</h6>
                  <hr />
                  <ul className="text-start">
                    <li className="border-bottom d-block py-2">
                      <NavLink
                        className="d-inline-block text-decoration-none   me-3"
                        to="/myOrders"
                        activeStyle={{ color: "#ff3344" }}
                      >
                        My Orders
                      </NavLink>
                    </li>
                    <li className="border-bottom d-block py-2">
                      <NavLink
                        className="d-inline-block text-decoration-none   me-3"
                        to="/manageOrders"
                        activeStyle={{ color: "#ff3344" }}
                      >
                        Manage Orders
                      </NavLink>
                    </li>
                    <li className=" d-block py-2">
                      <NavLink
                        className="d-inline-block text-decoration-none   me-3"
                        to="/addEvent"
                        activeStyle={{ color: "#ff3344" }}
                      >
                        Add Event
                      </NavLink>
                    </li>
                  </ul>
                  <hr />
                  <Button onClick={logOut} variant="outline" className="rounded-pill btn-main p-2 px-3">
                    Log Out&nbsp;
                    <i className="bi bi-box-arrow-right"></i>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
