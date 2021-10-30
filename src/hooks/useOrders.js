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
  }, []);

  useEffect(() => {
    fetch(`https://phwc-as11-server-jobayer.herokuapp.com/orders/user/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data))
      .catch((err) => {
        console.log("no orders found");
      });
  }, []);

  const deleteOrder = (id) => {
    let isYes = window.confirm("Do You Realy Want to Delete This Order?");
    console.log(isYes);
  };

  return {
    allOrders,
    setAllOrders,
    myOrders,
    setMyOrders,
    deleteOrder,
  };
};

export default useOrders;
