
import { Link, useLocation } from "react-router-dom";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

function OrderSuccess() {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <main className="sn-success-page">
      <div className="sn-success-card">
        <div className="sn-success-icon">
          <CheckCircle size={65} />
        </div>

        <span className="sn-success-eyebrow">STYLE NEST</span>

        <h1>Thank You for Your Order!</h1>

        <p className="sn-success-message">
          Your order has been successfully placed. We're getting
          everything ready for you!
        </p>

        {order && (
          <div className="sn-success-order-details">
            <div>
              <span>Order ID</span>
              <strong>{order.id}</strong>
            </div>

            <div>
              <span>Order Status</span>
              <strong>{order.status}</strong>
            </div>

            <div>
              <span>Total Amount</span>
              <strong>
                ₹{Number(order.total).toLocaleString("en-IN")}
              </strong>
            </div>
          </div>
        )}

        <div className="sn-success-note">
          <Package size={23} />
          <p>Your order details are available in your order history.</p>
        </div>

        <div className="sn-success-actions">
          <Link to="/order-history" className="sn-success-history">
            View Order History <ArrowRight size={17} />
          </Link>

          <Link to="/products" className="sn-success-shop">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;
