
import { Link } from "react-router-dom";
import {
  Package,
  ShoppingBag,
  ArrowRight,
  Clock,
  XCircle,
} from "lucide-react";
import { useOrders } from "../context/OrderContext";

function OrderHistory() {
  const { orders, cancelOrder } = useOrders();

  const handleCancelOrder = (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (confirmed) {
      cancelOrder(orderId);
    }
  };

  return (
    <main className="sn-order-history">
      <div className="sn-order-history-header">
        <span>YOUR STYLE NEST ACCOUNT</span>
        <h1>My <strong>Orders</strong></h1>
        <p>Keep track of all your Style Nest purchases.</p>

        <div className="sn-order-history-count">
          <Package size={18} />
          {orders.length} {orders.length === 1 ? "Order" : "Orders"}
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="sn-order-empty">
          <ShoppingBag size={48} />
          <h2>No orders yet!</h2>
          <p>Your placed orders will appear here.</p>
          <Link to="/products">
            Start Shopping <ArrowRight size={17} />
          </Link>
        </div>
      ) : (
        <div className="sn-order-list">
          {orders.map((order) => (
            <article className="sn-order-card" key={order.id}>
              <div className="sn-order-card-header">
                <div>
                  <span>ORDER ID</span>
                  <h3>{order.id}</h3>
                </div>

                <div
                  className={`sn-order-status ${
                    order.status === "Cancelled"
                      ? "sn-order-status-cancelled"
                      : ""
                  }`}
                >
                  <Clock size={15} />
                  {order.status}
                </div>
              </div>

              <div className="sn-order-date">
                Ordered on{" "}
                {new Date(order.date).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div>

              <div className="sn-order-products">
                {order.items.map((product, index) => (
                  <div
                    className="sn-order-product"
                    key={`${order.id}-${product.id}-${index}`}
                  >
                    <img src={product.image} alt={product.name} />

                    <div>
                      <h4>{product.name}</h4>
                      <p>Quantity: {product.quantity}</p>
                    </div>

                    <strong>
                      ₹{(
                        Number(product.price) * product.quantity
                      ).toLocaleString("en-IN")}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="sn-order-card-footer">
                <div>
                  <span>Payment Method</span>
                  <strong>{order.paymentMethod}</strong>
                </div>

                <div className="sn-order-total">
                  <span>Total Amount</span>
                  <strong>
                    ₹{Number(order.total).toLocaleString("en-IN")}
                  </strong>
                </div>
              </div>

              {order.status === "Confirmed" && (
                <button
                  type="button"
                  className="sn-order-cancel-button"
                  onClick={() => handleCancelOrder(order.id)}
                >
                  <XCircle size={17} />
                  Cancel Order
                </button>
              )}

              {order.status === "Cancelled" && (
                <p className="sn-order-cancelled-message">
                  This order has been cancelled.
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default OrderHistory;
