import React from "react";
import useOrders from "../../hooks/useOrders";
import Dashboard from "../Dashboard/Dashboard";
import OrderListItem from "../OrderListItem/OrderListItem";

const MyOrders = () => {
  const { myOrders } = useOrders();

  return (
    <Dashboard>
      <div className="admin-details">
        <h1 className="ms-3">My Orders</h1>
        <hr />
        <div className="order-list">
          {myOrders.map((order) => (
            <OrderListItem key={order._id} admin={false} order={order}></OrderListItem>
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default MyOrders;
