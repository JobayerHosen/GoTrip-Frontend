import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, FloatingLabel, FormControl, Form, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./AddEvent.css";

const AddEvent = () => {
  const { user, logOut } = useAuth();

  // CONTROLLED INPUT STATES
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [features, setFeatures] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(4.1);

  const handleAddEvent = (e) => {
    e.preventDefault();
    const event = { title, desc, image, features, address, price, rating };

    fetch("https://phwc-as11-server-jobayer.herokuapp.com/events/addEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.title) {
          setTitle("");
          setDesc("");
          setImage("");
          setFeatures("");
          setAddress("");
          setPrice(0);
          setRating(4.1);
        }
      })
      .catch((err) => {
        console.log("could not add event", err);
      });
    console.log(JSON.stringify(event));
  };

  return (
    <div>
      <Container>
        <div className="admin text-start">
          <Row>
            <Col xs={12} md={12} lg={3}>
              <div className="admin-side">
                <h4 className="mb-1">{user.displayName ? user.displayName : "Anonymous"}</h4>
                <h6 className="mb-2">{user.email}</h6>
                <hr />
                <ul className="text-start">
                  <li className="border-bottom d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/myOrders"
                      activeStyle={{ color: "#ff3344" }}
                    >
                      My Orders
                    </NavLink>
                  </li>
                  <li className="border-bottom d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/manageOrders"
                      activeStyle={{ color: "#ff3344" }}
                    >
                      Manage Orders
                    </NavLink>
                  </li>
                  <li className=" d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/addEvent"
                      activeStyle={{ color: "#ff3344" }}
                    >
                      Add Event
                    </NavLink>
                  </li>
                </ul>
                <hr />
                <Button onClick={logOut} variant="outline" className="rounded-pill btn-main p-2 px-3">
                  Log Out&nbsp;
                  <i className="bi bi-box-arrow-right"></i>
                </Button>
              </div>
            </Col>
            <Col xs={12} md={12} lg={9}>
              <div className="admin-details">
                <h1 className="ms-3">Add Event</h1>
                <hr />
                <div className="order-list">
                  <Row>
                    <Col xs={12} lg={7}>
                      <div className="add-event-card p-3 shadow-lg bg-white">
                        <div className="d-flex justify-content-between align-items-center p-0 mb-2 border-bottom">
                          <p className="d-inline-block text-main fw-bold fs-5">
                            <span className="text-muted fs-5">Add Event</span>
                          </p>
                          <p className="d-inline-block fw-bold text-muted fs-6">
                            <i className="bi bi-info-circle me-1" />
                          </p>
                        </div>
                        <form onSubmit={handleAddEvent}>
                          <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
                            <Form.Control
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              type="text"
                              placeholder="Title"
                              required
                            />
                          </FloatingLabel>
                          <FloatingLabel controlId="floatingInput" label="Location" className="mb-3">
                            <Form.Control
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              type="text"
                              placeholder="Location"
                              required
                            />
                          </FloatingLabel>
                          <p className="d-inline-block mb-0 text-muted fs-6">Comma separated values</p>

                          <FloatingLabel controlId="floatingInput" label="Features" className="mb-3">
                            <Form.Control
                              value={features}
                              onChange={(e) => setFeatures(e.target.value)}
                              type="text"
                              placeholder="Features"
                              required
                            />
                          </FloatingLabel>

                          <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                            <Form.Control
                              value={image}
                              onChange={(e) => setImage(e.target.value)}
                              type="text"
                              placeholder="Image URL"
                              required
                            />
                          </FloatingLabel>
                          <FloatingLabel
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            controlId="floatingTextarea"
                            label="Description"
                            className="mb-3"
                          >
                            <Form.Control as="textarea" placeholder="Description here" />
                          </FloatingLabel>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <p className="d-inline-block mb-0 text-muted fs-6">Price</p>
                            <p className="d-inline-block mb-0 text-muted fs-6">Rating</p>
                          </div>
                          <InputGroup className="mb-3 mt-0" size="lg">
                            <FormControl
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className="fs-6 text-muted mt-0 rounded-0 rounded-top"
                              type="number"
                              min="1"
                              required
                              placeholder="Price"
                            />
                            <FormControl
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                              className="fs-6 text-muted mt-0 rounded-0 rounded-top"
                              type="number"
                              placeholder="Rating"
                              aria-label="Rating"
                              required
                            />
                          </InputGroup>

                          <Button type="submit" variant="danger" className="btn-main w-100">
                            Add Now
                          </Button>
                        </form>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AddEvent;
