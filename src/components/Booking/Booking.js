import React, { useEffect } from "react";
import { Col, Container, FormControl, InputGroup, Row, Button, FloatingLabel, Form } from "react-bootstrap";
import { useParams } from "react-router";
import dtimg from "../../images/slide01.jpg";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();

  //   useEffect(() => {}, [id]);

  return (
    <Container>
      <h1 className="text-start">Bamboo Private Island near Coron</h1>
      <p className="text-muted text-start">
        <span>5.0</span> | Coron, Philippines
      </p>
      <img className="booking-img" src={dtimg} alt="" />

      <Row>
        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between align-items-center p-3 mb-3 border-bottom">
            <p className="d-inline-block fw-bold fs-3">Bamboo Private Island near Coron</p>
            <p className="d-inline-block text-main fw-bold fs-3">
              $ 352 <span className="text-muted fs-5">/ night</span>
            </p>
          </div>

          <ul className="text-start  p-3 mb-3 border-bottom">
            <li>16 GUEST</li>
            <li>7 BEDROOMS</li>
            <li>7 BEDS</li>
            <li>7 BATH</li>
          </ul>
          <p className="text-muted text-start  p-3 mb-3 border-bottom">
            Do Coron in style! Choose a lush postcard-perfect tropical paradise with turquoise-blue waters,
            powdery-white sand and coconut trees instead of the usual noisy and dirty choices the town has to offer. Our
            island was just listed in SPOT's 10 Breathtaking Island Resorts Around the Philippines and has the richest
            marine life, fabulous organic food, experienced and caring staff and thrilling activities to keep you coming
            back!
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="booking-card p-3 shadow-lg bg-white">
            <div className="d-flex justify-content-between align-items-center p-2 mb-2 border-bottom">
              <p className="d-inline-block text-main fw-bold fs-3">
                $ 352 <span className="text-muted fs-6">/ night</span>
              </p>
              <p className="d-inline-block fw-bold text-muted fs-6">@ 4.56</p>
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
                <Form.Control type="text" placeholder="name" min="1" />
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
