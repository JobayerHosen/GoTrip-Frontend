import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <h1 className="banner-title">
          YOUR ADVENTURE <br /> TRAVEL EXPERTS <br /> IN EUROPE!
        </h1>
      </Container>
    </div>
  );
};

export default Banner;
