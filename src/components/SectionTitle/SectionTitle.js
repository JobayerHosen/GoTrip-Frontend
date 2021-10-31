import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./SectionTitle.css";

const SectionTitle = ({ children, title, subtitle }) => {
  return (
    <Container>
      <Row className="section-title">
        {children ? (
          <>
            <Col xs={12} md={6}>
              <h1>{title}</h1>
              <h5 className="text-start text-main">{subtitle}</h5>
            </Col>
            <Col xs={12} md={6}>
              {children}
            </Col>
          </>
        ) : (
          <Col xs={12}>
            <h1 className="text-center">{title}</h1>
            <h5 className="text-center text-main">{subtitle}</h5>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SectionTitle;
