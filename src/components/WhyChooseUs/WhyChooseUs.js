import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";

const WhyChooseUs = () => {
  return (
    <Container>
      <SectionTitle title="Why book with GoTrip" subtitle="Love where you're going"></SectionTitle>

      <Row>
        <Col xs={12} sm={6} md={3}>
          <div className="d-flex flex-column align-items-center my-3">
            <i className="text-1 fs-1 mb-3 bi bi-cash"></i>
            <h3 className="text-center fs-bold">Ultimate flexibility</h3>
            <p style={{ maxWidth: "250px" }} className="text-muted text-center">
              You’re in control, with free cancellation and payment options to satisfy any plan or budget.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="d-flex flex-column align-items-center my-3">
            <i className="text-2 fs-1 mb-3 bi bi-tsunami"></i>
            <h3 className="text-center fs-bold">Memorable experience</h3>
            <p style={{ maxWidth: "250px" }} className="text-muted text-center">
              Browse and book tours and activities so incredible, you’ll want to tell your friends
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="d-flex flex-column align-items-center my-3">
            <i className="text-3 fs-1 mb-3 bi bi-droplet-half"></i>
            <h3 className="text-center fs-bold">Quality at our core</h3>
            <p style={{ maxWidth: "250px" }} className="text-muted text-center">
              High quality standards. Millions of reviews. A Trip advisor company.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="d-flex flex-column align-items-center my-3">
            <i className="text-2 fs-1 mb-3 bi bi-award"></i>
            <h3 className="text-center fs-bold">Award-winning support</h3>
            <p style={{ maxWidth: "250px" }} className="text-muted text-center">
              New price? New plan? No problem. We’re here to help, 24/7.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
