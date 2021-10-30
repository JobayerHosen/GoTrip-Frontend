import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useOrders from "../../hooks/useOrders";
import OrderListItem from "../OrderListItem/OrderListItem";
import "./ManageOrders.css";

const ManageOrders = () => {
  const { user, logOut } = useAuth();
  const { allOrders } = useOrders();

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
                <h1 className="ms-3">Manage Orders</h1>
                <hr />
                <div className="order-list">
                  {allOrders.map((order) => (
                    <OrderListItem key={order._id} admin={true} order={order}></OrderListItem>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ManageOrders;
