import React from "react";
import useOrders from "../../hooks/useOrders";
import Dashboard from "../Dashboard/Dashboard";
import OrderListItem from "../OrderListItem/OrderListItem";

const ManageOrders = () => {
  const { allOrders } = useOrders();

  return (
    <Dashboard>
      <div className="admin-details">
        <h1 className="ms-3">Manage Orders</h1>
        <hr />
        <div className="order-list">
          {allOrders.map((order) => (
            <OrderListItem key={order._id} admin={true} order={order}></OrderListItem>
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default ManageOrders;
