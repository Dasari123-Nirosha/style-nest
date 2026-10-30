import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);
  const [added, setAdded] = useState(false);

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const wishlisted = isInWishlist(product.id);

  useEffect(() => {
    setImageError(false);
  }, [product.id, product.image]);

  const description =
    product.description ||
    `Discover the ${product.name} at Style Nest.`;

  const handleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <article className="sn-product-card">
      <div className="sn-product-image-container">
        <Link
          to={`/products/${product.id}`}
          className="sn-product-image-wrap"
          aria-label={`View ${product.name}`}
        >
          {!imageError && product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="sn-product-image"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="sn-product-image-placeholder">
              <span>Image unavailable</span>
            </div>
          )}

          {(product.label || product.badge) && (
            <span className="sn-product-badge">
              {product.label || product.badge}
            </span>
          )}
        </Link>

        <button
          type="button"
          className={`sn-wishlist-heart ${wishlisted ? "active" : ""}`}
          onClick={handleWishlist}
          aria-label={
            wishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={21}
            fill={wishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="sn-product-info">
        <span className="sn-product-category">
          {product.category}
        </span>

        <h3 className="sn-product-name">
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        <p className="sn-product-description">
          {description}
        </p>

        {product.rating && (
          <div className="sn-product-rating">
            <span>★</span> {product.rating}
            <small>({product.reviews || 0} reviews)</small>
          </div>
        )}

        <div className="sn-product-prices">
          <span className="sn-product-price">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </span>

          {Number(product.originalPrice) > Number(product.price) && (
            <span className="sn-product-original-price">
              ₹{Number(product.originalPrice).toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <div className="sn-product-card-actions">
          <Link
            to={`/products/${product.id}`}
            className="sn-product-view-link"
          >
            View Product ↗
          </Link>

          <button
            type="button"
            className={`sn-add-cart-button ${added ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {added ? <Check size={17} /> : <ShoppingCart size={17} />}
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;