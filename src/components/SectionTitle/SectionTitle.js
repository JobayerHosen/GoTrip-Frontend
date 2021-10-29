import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./SectionTitle.css";

const SectionTitle = ({ children, title }) => {
  return (
    <Container>
      <Row className="section-title">
        <Col xs={12} md={6}>
          <h1>{title}</h1>
        </Col>
        {children && (
          <Col xs={12} md={6}>
            {children}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SectionTitle;
