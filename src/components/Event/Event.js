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
          <p className="text-muted text-start">
            <span>
              <i className="bi bi-star-fill text-warning me-1"></i> {event?.rating}
            </span>
            &nbsp; | &nbsp; <i className="bi bi-geo-alt-fill text-main  me-1"></i> {event?.address}
          </p>
          <Card.Text className="text-muted fs-6">{desc.slice(0, 120) + "..."}</Card.Text>
          <div className="d-flex justify-centent-between">
            <NavLink to={`/booking/${_id}`}>
              <Button variant="danger" className="btn-main rounded-pill px-3">
                Book Now
              </Button>
            </NavLink>
            <p className="d-inline-block text-main fw-bold ms-auto fs-3 mb-0">
              $ {event?.price} <span className="text-muted fs-6">/ night</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;
