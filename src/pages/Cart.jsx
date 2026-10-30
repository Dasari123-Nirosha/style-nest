import { Link ,useNavigate} from "react-router-dom";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();
const navigate = useNavigate();
  return (
    <main className="sn-cart-page">
      <div className="sn-cart-header">
        <span className="sn-cart-eyebrow">YOUR SHOPPING BAG</span>
        <h1>My Shopping Cart</h1>
        <p>Review your favourite finds before checkout.</p>
        <span className="sn-cart-count">
          {cart.length} {cart.length === 1 ? "Item" : "Items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="sn-cart-empty">
          <ShoppingBag size={50} strokeWidth={1.5} />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>

          <Link to="/products" className="sn-cart-shop-button">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="sn-cart-layout">
          <div className="sn-cart-items">
            {cart.map((product) => (
              <article className="sn-cart-item" key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  className="sn-cart-image"
                >
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className="sn-cart-item-info">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>

                  <strong>
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </strong>

                  <div className="sn-cart-quantity">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          product.id,
                          product.quantity - 1
                        )
                      }
                      disabled={product.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={15} />
                    </button>

                    <span>{product.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          product.id,
                          product.quantity + 1
                        )
                      }
                      aria-label="Increase quantity"
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="sn-cart-remove"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>

                <strong className="sn-cart-item-total">
                  ₹
                  {(
                    Number(product.price) * product.quantity
                  ).toLocaleString("en-IN")}
                </strong>
              </article>
            ))}
          </div>

          <aside className="sn-cart-summary">
            <h2>Order Summary</h2>

            <div className="sn-cart-summary-row">
              <span>Subtotal</span>
              <strong>
                ₹{cartTotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="sn-cart-summary-row">
              <span>Shipping</span>
              <strong>Free</strong>
            </div>

            <div className="sn-cart-summary-total">
              <span>Total</span>
              <strong>
                ₹{cartTotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <button
  type="button"
  className="sn-cart-checkout-button"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout ↗
</button>

            <Link to="/products" className="sn-cart-continue">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;