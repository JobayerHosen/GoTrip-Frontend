import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <Container>
      <SectionTitle title="Top Destinations" subtitle="Love where you're going"></SectionTitle>

      <Row>
        <Col xs={12} sm={6} md={3}>
          <div className="overflow-hidden w-100 position-relative my-3">
            <img className="w-100" src="https://i.ibb.co/qyHcGmz/destinations-1-2-270x384.jpg" alt="" />
            <h3 className="featured-title text-white">AFRICA</h3>
            <hr className="hr"></hr>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="overflow-hidden w-100 position-relative my-3">
            <img className="w-100" src="https://i.ibb.co/8xcpNVW/destinations-1-1-270x384.jpg" alt="" />
            <h3 className="featured-title text-white">MALDIVES</h3>
            <hr className="hr"></hr>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="overflow-hidden w-100 position-relative my-3">
            <img className="w-100" src="https://i.ibb.co/RTYGJMq/destinations-1-3-270x384.jpg" alt="" />
            <h3 className="featured-title text-white">EGYPT</h3>
            <hr className="hr"></hr>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="overflow-hidden w-100 position-relative my-3">
            <img className="w-100" src=" https://i.ibb.co/0YPJJ5j/destinations-1-4-270x384.jpg" alt="" />
            <h3 className="featured-title text-white">LONDON</h3>
            <hr className="hr"></hr>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;

// https://i.ibb.co/8xcpNVW/destinations-1-1-270x384.jpg
// https://i.ibb.co/RTYGJMq/destinations-1-3-270x384.jpg
// https://i.ibb.co/0YPJJ5j/destinations-1-4-270x384.jpg
