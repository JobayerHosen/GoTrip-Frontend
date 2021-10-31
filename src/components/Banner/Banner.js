import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <h1 className="banner-title">
          ENJOY YOUR <br /> TRIP
          <br />
          <span style={{ fontFamily: "cursive" }} className="">
            Like never <br /> before
          </span>
        </h1>
      </Container>
    </div>
  );
};

export default Banner;
