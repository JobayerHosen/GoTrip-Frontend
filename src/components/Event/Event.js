import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Event.css";

const Event = ({ event }) => {
  const { _id, title, image, desc, rating, price, address, features } = event;
  return (
    <Col xs={12} md={4}>
      <Card className="bsCard">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted fs-6">{desc.slice(0, 120) + "..."}</Card.Text>
          <NavLink to={`/booking/${_id}`}>
            <Button variant="danger" className="btn-main rounded-pill px-3">
              Book Now
            </Button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;
