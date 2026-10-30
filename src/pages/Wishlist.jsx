
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <main className="sn-wishlist-page">
      <div className="sn-wishlist-header">
        <span className="sn-wishlist-eyebrow">
          YOUR PERSONAL COLLECTION
        </span>

        <h1>
          My <span>Wishlist</span>
        </h1>

        <p>
          Your favourite finds, saved in one beautiful place.
        </p>

        <div className="sn-wishlist-count">
          <Heart size={17} />
          {wishlist.length} Saved Items
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="sn-wishlist-empty">
          <div className="sn-wishlist-empty-icon">
            <Heart size={42} />
          </div>

          <h2>Your wishlist is waiting!</h2>

          <p>
            Save the products you love and find them here.
          </p>

          <Link
            to="/products"
            className="sn-wishlist-shop-button"
          >
            Explore Products <ArrowRight size={17} />
          </Link>
        </div>
      ) : (
        <div className="sn-wishlist-grid">
          {wishlist.map((product) => (
            <article
              className="sn-wishlist-card"
              key={product.id}
            >
              <div className="sn-wishlist-image">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </Link>

                <button
                  type="button"
                  className="sn-wishlist-remove"
                  onClick={() => removeFromWishlist(product.id)}
                  aria-label={`Remove ${product.name}`}
                  title="Remove from wishlist"
                >
                  <Trash2 size={17} />
                </button>
              </div>

              <div className="sn-wishlist-info">
                <span className="sn-wishlist-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <div className="sn-wishlist-price">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </div>

                {/* WISHLIST ADD TO CART */}
                <button
                  type="button"
                  className="sn-wishlist-add-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Wishlist;
