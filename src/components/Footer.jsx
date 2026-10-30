import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="sn-footer">
      <div className="sn-footer-main">
        {/* BRAND */}
        <div className="sn-footer-brand">
          <Link to="/" className="sn-footer-logo">
            <img
              src="/images/style-nest-logo.png"
              alt="Style Nest"
            />
            <span>Style Nest</span>
          </Link>

          <p>
            Discover your style and create beautiful spaces.
            Find fashion, accessories, and lifestyle essentials
            that make every day special.
          </p>

          
        </div>

        {/* QUICK LINKS */}
        <div className="sn-footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Shop All</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/#about">About Us</Link>
        </div>

        {/* CUSTOMER CARE */}
        <div className="sn-footer-column">
          <h3>Customer Care</h3>
          <Link to="/profile">My Account</Link>
          <Link to="/order-history">My Orders</Link>
          <Link to="/wishlist">My Wishlist</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        {/* CONTACT */}
        <div className="sn-footer-column sn-footer-contact">
          <h3>Get in Touch</h3>

          <p>
            <span>✉</span>
            <span>support@stylenest.com</span>
          </p>

          <p>
            <span>☎</span>
            <span>Contact through email</span>
          </p>

          <p>
            <span>⌖</span>
            <span>India</span>
          </p>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="sn-footer-newsletter">
        <div>
          <h3>Stay in Style!</h3>
          <p>
            Explore new arrivals and discover your next favourite find.
          </p>
        </div>

        <Link to="/products" className="sn-footer-shop-button">
          Explore Collection →
        </Link>
      </div>

      {/* BOTTOM */}
      <div className="sn-footer-bottom">
        <p>
          © {currentYear} Style Nest. Made with ♥ for you.
        </p>

        <button
          type="button"
          className="sn-footer-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;