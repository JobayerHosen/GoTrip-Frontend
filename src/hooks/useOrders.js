import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrders = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("https://phwc-as11-server-jobayer.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data))
      .catch((err) => {
        console.log("no orders found");
      });
  }, [allOrders]);

  useEffect(() => {
    fetch(`https://phwc-as11-server-jobayer.herokuapp.com/orders/user/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data))
      .catch((err) => {
        console.log("no orders found");
      });
  }, [myOrders]);

  const deleteOrder = (id) => {
    let isYes = window.confirm("Do You Realy Want to Delete This Order?");
    if (isYes) {
      fetch(`https://phwc-as11-server-jobayer.herokuapp.com/orders/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setMyOrders([]);
          }
        });
    }
    console.log(isYes);
  };

  const approveOrder = (order) => {
    let isYes = window.confirm("Do You Realy Want to Approve This Order?");
    if (isYes) {
      order.status = "Approved";
      console.log(JSON.stringify(order));
      fetch(`https://phwc-as11-server-jobayer.herokuapp.com/orders/updateOrder/${order._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "Approved") {
            setAllOrders([]);
          }
        });
    }
    console.log(isYes);
  };

  return {
    allOrders,
    setAllOrders,
    myOrders,
    setMyOrders,
    deleteOrder,
    approveOrder,
  };
};

export default useOrders;
