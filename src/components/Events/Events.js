import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Event from "../Event/Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://phwc-as11-server-jobayer.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {events.map((event) => (
            <Event key={event._id} event={event}></Event>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
