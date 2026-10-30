
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { ShoppingBag, ArrowLeft, CheckCircle } from "lucide-react";

function Checkout() {
  const { cart, cartTotal, removeFromCart } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      navigate("/products");
      return;
    }

    const newOrder = addOrder({
      customer: { ...formData },
      items: cart.map((product) => ({ ...product })),
      total: cartTotal,
      paymentMethod: formData.paymentMethod,
    });

    cart.forEach((product) => removeFromCart(product.id));

    navigate("/order-success", {
      state: { order: newOrder },
    });
  };

  if (cart.length === 0) {
    return (
      <main className="sn-checkout-empty">
        <ShoppingBag size={48} />
        <h2>Your cart is empty</h2>
        <p>Add products to your cart before checkout.</p>
        <Link to="/products">Explore Products</Link>
      </main>
    );
  }

  return (
    <main className="sn-checkout-page">
      <div className="sn-checkout-header">
        <span>STYLE NEST CHECKOUT</span>
        <h1>Complete Your Order</h1>
        <p>Just a few details before your favourite finds reach you.</p>
      </div>

      <div className="sn-checkout-layout">
        <form className="sn-checkout-form" onSubmit={handleSubmit}>
          <section className="sn-checkout-section">
            <h2>01. Delivery Information</h2>

            <div className="sn-checkout-fields">
              <label>
                Full Name
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />
              </label>

              <label className="sn-checkout-full">
                Delivery Address
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House number, street and area"
                  rows="3"
                  required
                />
              </label>

              <label>
                City
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                />
              </label>

              <label>
                State
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  required
                />
              </label>

              <label>
                PIN Code
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit PIN code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  required
                />
              </label>
            </div>
          </section>

          <section className="sn-checkout-section">
            <h2>02. Payment Method</h2>

            <label className="sn-checkout-payment">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={formData.paymentMethod === "Cash on Delivery"}
                onChange={handleChange}
              />
              <span>
                <strong>Cash on Delivery</strong>
                <small>Pay when your order arrives.</small>
              </span>
            </label>
          </section>

          <button type="submit" className="sn-checkout-place-order">
            Place Order <CheckCircle size={19} />
          </button>

          <Link to="/cart" className="sn-checkout-back">
            <ArrowLeft size={16} /> Back to Cart
          </Link>
        </form>

        <aside className="sn-checkout-summary">
          <h2>Order Summary</h2>

          {cart.map((product) => (
            <div className="sn-checkout-product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Quantity: {product.quantity}</p>
              </div>
              <strong>
                ₹{(
                  Number(product.price) * product.quantity
                ).toLocaleString("en-IN")}
              </strong>
            </div>
          ))}

          <div className="sn-checkout-total">
            <span>Subtotal</span>
            <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
          </div>

          <div className="sn-checkout-total">
            <span>Shipping</span>
            <strong>Free</strong>
          </div>

          <div className="sn-checkout-grand-total">
            <span>Total</span>
            <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
