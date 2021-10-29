import React from "react";
import "./Footer.css";
import { Col, Container, FormControl, InputGroup, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} md={8}>
            <h1 className="text-white mb-3 text-uppercase">Subscribe to our newsletter</h1>
            <InputGroup className="mb-5" size="lg">
              <FormControl placeholder="Your Email " aria-label="Subscribe" aria-describedby="basic-addon2" />
              <Button className="btn-main" variant="outline-secondary" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="d-flex flex-column">
              <NavLink
                to="/"
                className="logo text-start text-decoration-none d-flex justify-content-center align-items-center mx-auto mb-2"
              >
                {/* <img src="" alt="logo" /> */}
                <h1 className="text-main text-center">GoTrip</h1>
              </NavLink>

              <p className="text-white mb-3 p-1">
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner.
              </p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <div className="d-flex flex-column mt-3">
              <h6 className="text-white mb-3">Contact</h6>
              <ul>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/">
                    +088 01673-453290
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/">
                    +088 01673-453291
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="d-flex flex-column mt-3">
              <h6 className="text-white mb-3">Links</h6>
              <ul>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center py-4 mt-5">
          <p className="text-white">Copyright &copy; 2021 All rights reserved. </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
