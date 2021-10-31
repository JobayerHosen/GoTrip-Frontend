import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Event from "../Event/Event";

const Events = ({ home }) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://phwc-as11-server-jobayer.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const limit = home ? 6 : events.length;
  return (
    <div>
      <Container>
        <Row>
          {events.slice(0, limit).map((event) => (
            <Event key={event._id} event={event}></Event>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
