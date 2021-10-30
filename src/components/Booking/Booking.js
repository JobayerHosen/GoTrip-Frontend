import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row, Button, FloatingLabel, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import "./Booking.css";

const Booking = () => {
  const history = useHistory();
  const [event, setEvent] = useState({});
  const { user } = useAuth();
  const { addUser, updateUser } = useUser();

  // CONTROLLED INPUT'S STATES
  const [checkIn, setCheckIn] = useState("");
  const [stayTime, setStayTime] = useState(1);
  const [guests, setGuest] = useState(1);
  const [name, setName] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://phwc-as11-server-jobayer.herokuapp.com/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // GET USER'S PREVIOUSLY SAVED DATA
  const [dbUser, setDbUser] = useState(null);
  useEffect(() => {
    fetch(`https://phwc-as11-server-jobayer.herokuapp.com/users/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.email) {
          setName(data.name);
          setPhone(data.phone);
          setAddress(data.address);
          setDbUser(data);
        }
      })
      .catch((err) => {
        setDbUser(null);
      });
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const userData = { uid: user.uid, name, email, phone, address };
    const bookingData = {
      eventId: id,
      uid: user.uid,
      name,
      email,
      phone,
      address,
      checkIn,
      stayTime,
      guests,
      totalPrice: event?.price * guests * stayTime,
      status: "Pending",
    };

    // ADD OR UPDATE USERS INFO TO DATABASE FOR FUTURE USE
    dbUser ? updateUser(user.uid, userData) : addUser(userData);

    //PLACE BOOKING
    fetch("https://phwc-as11-server-jobayer.herokuapp.com/orders/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/myOrders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        {/* DETAILS  */}
        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between align-items-center p-3 mb-3 border-bottom">
            <p className="d-inline-block fw-bold fs-3">{event?.address}</p>
            <p className="d-inline-block text-main fw-bold fs-3">
              $ {event?.price} <span className="text-muted fs-5">/ night</span>
            </p>
          </div>

          <ul className="text-start  p-3 mb-3 border-bottom text-uppercase fw-bold">
            {event?.features?.split(".").map((feat) => (
              <li key={feat}>
                <i className="bi bi-check-circle-fill text-main me-2 fs-5" />
                {feat}
              </li>
            ))}
          </ul>
          <p className="text-muted text-start  p-3 mb-3 border-bottom">{event?.desc}</p>
        </Col>

        {/* BOOKING CARD  */}
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
            <form onSubmit={handleBookingSubmit}>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <p className="d-inline-block mb-0 text-muted fs-6">Check In Date</p>
                <p className="d-inline-block mb-0 text-muted fs-6">Nights to stay</p>
              </div>
              <InputGroup className="mb-3 mt-0" size="lg">
                <FormControl
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="fs-6 text-muted mt-0 rounded-0 rounded-top"
                  type="date"
                  aria-label="Check In Date"
                  required
                />
                <FormControl
                  value={stayTime}
                  onChange={(e) => setStayTime(e.target.value)}
                  className="fs-6 text-muted mt-0 rounded-0 rounded-top"
                  type="number"
                  min="1"
                  max="7"
                  placeholder="Nights to stay"
                  required
                />
              </InputGroup>
              <FloatingLabel controlId="floatingInput" label="Number of Guest" className="mb-3">
                <Form.Control
                  value={guests}
                  onChange={(e) => setGuest(e.target.value)}
                  type="number"
                  placeholder="number of guest"
                  min="1"
                  required
                />
              </FloatingLabel>

              <p className="d-inline-block mb-0 text-muted fs-6">User's Information</p>

              <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="name"
                  min="1"
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  disabled
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                <Form.Control
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone"
                  min="1"
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                <Form.Control
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Address"
                  min="1"
                  required
                />
              </FloatingLabel>

              <Button type="submit" variant="danger" className="btn-main w-100">
                Book Now
              </Button>
              <div className="d-flex justify-content-between align-items-center border-top text-center fw-bold mt-3 mb-0">
                <h3>Total</h3>
                <h3 className="">$ {event?.price * guests * stayTime || 0}</h3>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
