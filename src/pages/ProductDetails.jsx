
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Heart, ShoppingCart, Minus, Plus, ArrowLeft } from "lucide-react";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === id
  );

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  if (!product) {
    return (
      <main className="sn-product-details-page">
        <div className="sn-product-not-found">
          <h1>Product Not Found</h1>
          <p>Sorry, we couldn't find this product.</p>
          <Link to="/products" className="sn-back-collection">
            <ArrowLeft size={17} /> Back to Collection
          </Link>
        </div>
      </main>
    );
  }

  const isWishlisted = wishlist.some(
    (item) => String(item.id) === String(product.id)
  );

  const originalPrice = Number(product.originalPrice) || Number(product.price);
  const currentPrice = Number(product.price) || 0;

  const discount =
    originalPrice > 0
      ? Math.round(
          ((originalPrice - currentPrice) / originalPrice) * 100
        )
      : 0;

  const rating = Number(product.rating) || 0;
  const reviews = Number(product.reviews) || 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <main className="sn-product-details-page">
      <div className="sn-product-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Collection</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="sn-product-details">
        {/* PRODUCT IMAGE */}
        <div className="sn-product-details-image">
          <img src={product.image} alt={product.name} />

          {product.badge && (
            <span className="sn-product-badge">
              {product.badge}
            </span>
          )}
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="sn-product-details-info">
          <span className="sn-section-eyebrow">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          {/* RATINGS */}
          <div className="sn-details-rating">
            <div className="sn-details-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill={star <= Math.round(rating) ? "#DCA278" : "none"}
                  color="#DCA278"
                />
              ))}
            </div>

            <span>{rating.toFixed(1)}</span>
            <span>({reviews} reviews)</span>
          </div>

          {/* PRICE */}
          <div className="sn-product-details-price">
            <strong>
              ₹{currentPrice.toLocaleString("en-IN")}
            </strong>

            {originalPrice > currentPrice && (
              <>
                <del>
                  ₹{originalPrice.toLocaleString("en-IN")}
                </del>

                <span>{discount}% OFF</span>
              </>
            )}
          </div>

          <p className="sn-product-details-description">
            {product.description}
          </p>

          <div className="sn-product-details-divider" />

          {/* AVAILABILITY */}
          <p className="sn-details-stock">
            {product.inStock === false ? (
              <span className="sn-out-stock">
                Currently unavailable
              </span>
            ) : (
              <span className="sn-in-stock">
                ● In Stock
              </span>
            )}
          </p>

          {/* QUANTITY */}
          <div className="sn-quantity-section">
            <h3>Quantity</h3>

            <div className="sn-quantity-control">
              <button
                type="button"
                onClick={() =>
                  setQuantity((previous) => Math.max(1, previous - 1))
                }
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((previous) => previous + 1)
                }
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="sn-details-actions">
            <button
              type="button"
              className="sn-details-cart-button"
              onClick={handleAddToCart}
              disabled={product.inStock === false}
            >
              <ShoppingCart size={19} />
              Add to Cart
            </button>

            <button
              type="button"
              className={`sn-details-wishlist-button ${
                isWishlisted ? "active" : ""
              }`}
              onClick={handleWishlist}
              aria-label={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              <Heart
                size={20}
                fill={isWishlisted ? "currentColor" : "none"}
              />
            </button>
          </div>

          <div className="sn-product-details-divider" />

          <div className="sn-product-details-feature">
            <span>♡</span>
            <div>
              <h3>Thoughtfully Selected</h3>
              <p>Discover your next favourite find at Style Nest.</p>
            </div>
          </div>

          <div className="sn-product-details-feature">
            <span>✦</span>
            <div>
              <h3>Style Meets Comfort</h3>
              <p>Everyday finds for your personal style and home.</p>
            </div>
          </div>

          <Link
            to="/products"
            className="sn-back-collection"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
