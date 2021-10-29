import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row, Button, FloatingLabel, Form } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const [event, setEvent] = useState({});
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://phwc-as11-server-jobayer.herokuapp.com/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1 className="text-start">{event?.title}</h1>
      <p className="text-muted text-start">
        <span>
          <i className="bi bi-star-fill text-warning me-1"></i> {event?.rating}
        </span>
        &nbsp; | &nbsp; <i className="bi bi-geo-alt-fill text-main  me-1"></i> {event?.address}
      </p>
      <img className="booking-img" src={event?.image} alt="" />

      <Row>
        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between align-items-center p-3 mb-3 border-bottom">
            <p className="d-inline-block fw-bold fs-3">{event?.address}</p>
            <p className="d-inline-block text-main fw-bold fs-3">
              $ {event?.price} <span className="text-muted fs-5">/ night</span>
            </p>
          </div>

          <ul className="text-start  p-3 mb-3 border-bottom text-uppercase fw-bold">
            {event?.features.split(".").map((feat) => (
              <li>
                <i className="bi bi-check-circle-fill text-main me-2 fs-5" />
                {feat}
              </li>
            ))}
          </ul>
          <p className="text-muted text-start  p-3 mb-3 border-bottom">{event?.desc}</p>
        </Col>
        <Col xs={12} md={4}>
          <div className="booking-card p-3 shadow-lg bg-white">
            <div className="d-flex justify-content-between align-items-center p-2 mb-2 border-bottom">
              <p className="d-inline-block text-main fw-bold fs-3">
                $ {event?.price} <span className="text-muted fs-6">/ night</span>
              </p>
              <p className="d-inline-block fw-bold text-muted fs-6">
                <i className="bi bi-star-fill text-warning me-1" />
                {event?.rating}
              </p>
            </div>
            <form>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <p className="d-inline-block mb-0 text-muted fs-6">Check In Date</p>
                <p className="d-inline-block mb-0 text-muted fs-6">Nights to stay</p>
              </div>
              <InputGroup className="mb-3 mt-0" size="lg">
                <FormControl
                  className="fs-6 text-muted mt-0 rounded-0 rounded-top"
                  type="date"
                  aria-label="Check In Date"
                  required
                />
                <FormControl
                  className="fs-6 text-muted mt-0 rounded-0 rounded-top"
                  type="number"
                  min="1"
                  max="7"
                  placeholder="Nights to stay"
                  required
                />
              </InputGroup>
              <FloatingLabel controlId="floatingInput" label="Number of Guest" className="mb-3">
                <Form.Control type="number" placeholder="number of guest" min="1" />
              </FloatingLabel>

              <p className="d-inline-block mb-0 text-muted fs-6">User's Information</p>

              <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control type="text" defaultValue={user.displayName} placeholder="name" min="1" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                <Form.Control type="text" placeholder="Phone" min="1" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                <Form.Control type="text" placeholder="Address" min="1" />
              </FloatingLabel>

              <Button type="submit" variant="danger" className="btn-main w-100">
                Book Now
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
