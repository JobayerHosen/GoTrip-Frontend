import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useOrders from "../../hooks/useOrders";
import "./OrderListItem.css";

const OrderListItem = ({ order, admin }) => {
  const [event, setEvent] = useState(null);
  const { deleteOrder, approveOrder } = useOrders();

  useEffect(() => {
    fetch(`https://phwc-as11-server-jobayer.herokuapp.com/events/${order.eventId}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  const bgStyle = {
    backgroundImage: `url(${event?.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="listItem" style={bgStyle}>
        <div className="d-flex justify-content-between align-items-center align-items-start mb-2">
          <h4 className="d-inline-block m-0 fs-5 overflow-hidden" style={{ maxHeight: "1.5rem" }}>
            <i className="bi bi-geo-alt"></i> {event?.title}
          </h4>
          <p className="d-inline-block m-0 ms-1 bg-3 px-2 py-1 rounded fs-5">{order.status}</p>
        </div>

        <div className="d-flex justify-content-between align-items-center align-items-start mb-3">
          <h5 title={`${order.email} | ${order.phone} | ${order.address}`} className="d-inline-block m-0 fs-5">
            <i className="bi bi-person-circle"></i> {order?.name}
          </h5>
          <h4 className="d-inline-block bg-2 px-2 p-1 rounded m-0 fs-4">$ {order?.totalPrice}</h4>
        </div>

        <div className="d-flex justify-content-between align-items-center align-items-start">
          <div>
            <small className="inline-block p-2 rounded bg-1 me-2">
              <i className="bi bi-calendar-day"></i> {order?.checkIn}
            </small>
            <small className="inline-block p-2 rounded bg-2 me-2">
              <i className="bi bi-calendar-day"></i> {order?.stayTime} Night
            </small>
            <small className="inline-block p-2 rounded bg-3 me-2">
              <i className="bi bi-calendar-day"></i> {order?.guests} Guests
            </small>
          </div>
          <div>
            {admin && (
              <Button onClick={() => approveOrder(order)} className="rounded-circle ms-2" title="update">
                <i className="bi bi-pencil-square"></i>
              </Button>
            )}

            <Button
              onClick={() => deleteOrder(order._id)}
              variant="danger"
              className="btn-main rounded-circle ms-2"
              title="delete"
            >
              <i className="bi bi-trash-fill"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListItem;
