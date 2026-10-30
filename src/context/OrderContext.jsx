
import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("style-nest-orders")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("style-nest-orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (orderDetails) => {
    const newOrder = {
      id: `SN${Date.now()}`,
      date: new Date().toISOString(),
      status: "Confirmed",
      ...orderDetails,
    };

    setOrders((previousOrders) => [newOrder, ...previousOrders]);

    return newOrder;
  };

  const cancelOrder = (orderId) => {
    setOrders((previousOrders) =>
      previousOrders.map((order) =>
        order.id === orderId && order.status === "Confirmed"
          ? { ...order, status: "Cancelled" }
          : order
      )
    );
  };

  const getOrderById = (orderId) => {
    return orders.find((order) => order.id === orderId);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        cancelOrder,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }

  return context;
}
