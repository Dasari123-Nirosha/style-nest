import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  UserRound,
  ChevronDown,
  Package,
  LogOut,
  LayoutDashboard,
  Plus,
  Pencil,
  Trash2,
  LogIn,
} from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [customerProfileOpen, setCustomerProfileOpen] = useState(false);
  const [adminProfileOpen, setAdminProfileOpen] = useState(false);

  const customerProfileRef = useRef(null);
  const adminProfileRef = useRef(null);
  const navigate = useNavigate();

  const { admin, customer, switchRole, logout } = useAuth();

  const { wishlist = [] } = useWishlist();
  const { cartCount = 0 } = useCart();

  const wishlistCount = wishlist.length;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        customerProfileRef.current &&
        !customerProfileRef.current.contains(event.target)
      ) {
        setCustomerProfileOpen(false);
      }

      if (
        adminProfileRef.current &&
        !adminProfileRef.current.contains(event.target)
      ) {
        setAdminProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setCustomerProfileOpen(false);
    setAdminProfileOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchText.trim();
    if (!query) return;

    const normalizedQuery = query.toLowerCase();

    if (["home", "homepage"].includes(normalizedQuery)) {
      navigate("/");
    } else if (
      ["shop", "products", "collection", "collections"].includes(normalizedQuery)
    ) {
      navigate("/products");
    } else if (
      ["category", "categories"].includes(normalizedQuery)
    ) {
      navigate("/categories");
    } else if (
      ["about", "about us", "about style nest"].includes(normalizedQuery)
    ) {
      navigate("/#about");
    } else {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    }

    setSearchText("");
    setSearchOpen(false);
    closeMenu();
  };

  const handleLogout = (role) => {
    logout(role);
    closeMenu();
    navigate("/");
  };

  const handleAdminAccess = () => {
    closeMenu();

    if (admin) {
      switchRole("admin");
      navigate("/admin");
    } else {
      navigate("/login", { state: { role: "admin" } });
    }
  };

  const handleCustomerAccess = () => {
    closeMenu();

    if (customer) {
      switchRole("customer");
      navigate("/profile");
    } else {
      navigate("/login", { state: { role: "customer" } });
    }
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/products" },
    { label: "Categories", path: "/categories" },
    { label: "About", path: "/#about" },
  ];

  return (
    <header className="sn-navbar">
      <div className="sn-navbar-main">

        {/* BRAND */}
        <Link
          to="/"
          className="sn-brand"
          onClick={closeMenu}
          aria-label="Style Nest home"
        >
          <img
            src="/images/style-nest-logo.png"
            alt="Style Nest"
            className="sn-brand-image"
          />

          <span className="sn-brand-text">
            <span className="sn-brand-name">Style Nest</span>
            <span className="sn-brand-tagline">
              SHOP · STYLE · LIVE BETTER
            </span>
          </span>
        </Link>

        {/* MAIN NAVIGATION */}
        <nav
          className={`sn-nav-links ${menuOpen ? "sn-nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `sn-nav-link ${
                  isActive && link.path === "/" ? "sn-nav-active" : ""
                }`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/wishlist"
            className="sn-mobile-account"
            onClick={closeMenu}
          >
            <Heart size={18} /> Wishlist
          </Link>

          <Link
            to="/cart"
            className="sn-mobile-account"
            onClick={closeMenu}
          >
            <ShoppingBag size={18} /> Cart
          </Link>

          <button
            type="button"
            className="sn-mobile-account"
            onClick={handleCustomerAccess}
          >
            <UserRound size={18} /> Customer Dashboard
          </button>

          <button
            type="button"
            className="sn-mobile-account"
            onClick={handleAdminAccess}
          >
            <LayoutDashboard size={18} /> Admin Dashboard
          </button>
        </nav>

        {/* NAVBAR ACTIONS */}
        <div className="sn-nav-actions">

          {/* SEARCH */}
          <button
            type="button"
            className={`sn-icon-button ${
              searchOpen ? "sn-icon-active" : ""
            }`}
            aria-label={searchOpen ? "Close search" : "Open search"}
            onClick={() => setSearchOpen((previous) => !previous)}
          >
            {searchOpen ? <X size={21} /> : <Search size={21} />}
          </button>

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="sn-icon-button sn-nav-count-link"
            aria-label={`Wishlist, ${wishlistCount} items`}
          >
            <Heart size={21} />
            {wishlistCount > 0 && (
              <span className="sn-nav-count">{wishlistCount}</span>
            )}
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="sn-icon-button sn-nav-count-link"
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <ShoppingBag size={21} />
            {cartCount > 0 && (
              <span className="sn-nav-count">{cartCount}</span>
            )}
          </Link>

          {/* ADMIN PROFILE - ALWAYS VISIBLE */}
          <div
            className="sn-profile-menu sn-admin-profile-menu"
            ref={adminProfileRef}
          >
            <button
              type="button"
              className="sn-admin-profile-button"
              onClick={() => {
                setAdminProfileOpen((previous) => !previous);
                setCustomerProfileOpen(false);
              }}
              aria-expanded={adminProfileOpen}
              aria-haspopup="true"
              title="Admin menu"
            >
              <span className="sn-admin-initials">AD</span>
              <ChevronDown
                size={14}
                className={adminProfileOpen ? "sn-chevron-open" : ""}
              />
            </button>

            {adminProfileOpen && (
              <div className="sn-profile-dropdown">
                <div className="sn-profile-dropdown-heading">
                  <span className="sn-profile-avatar">
                    <UserRound size={22} />
                  </span>

                  <div>
                    <strong>{admin?.name || "Administrator"}</strong>
                    <small>
                      {admin ? "Admin Account Active" : "Admin Access"}
                    </small>
                  </div>
                </div>

                <div className="sn-profile-divider" />

                {!admin && (
                  <button type="button" onClick={handleAdminAccess}>
                    <LogIn size={17} /> Admin Login
                  </button>
                )}

                <Link to="/admin" onClick={handleAdminAccess}>
                  <LayoutDashboard size={17} /> Admin Dashboard
                </Link>

                <Link
                  to="/admin/products"
                  onClick={() => {
                    switchRole("admin");
                    closeMenu();
                  }}
                >
                  <Package size={17} /> Manage Products
                </Link>

                <Link
                  to="/admin/products?action=add"
                  onClick={() => {
                    switchRole("admin");
                    closeMenu();
                  }}
                >
                  <Plus size={17} /> Add Products
                </Link>

                <Link
                  to="/admin/products?action=edit"
                  onClick={() => {
                    switchRole("admin");
                    closeMenu();
                  }}
                >
                  <Pencil size={17} /> Edit / Update Products
                </Link>

                <Link
                  to="/admin/products?action=delete"
                  onClick={() => {
                    switchRole("admin");
                    closeMenu();
                  }}
                >
                  <Trash2 size={17} /> Remove / Delete Products
                </Link>

                {admin && (
                  <>
                    <div className="sn-profile-divider" />

                    <button
                      type="button"
                      className="sn-profile-logout"
                      onClick={() => handleLogout("admin")}
                    >
                      <LogOut size={17} /> Admin Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* CUSTOMER PROFILE - ALWAYS VISIBLE */}
          <div
            className="sn-profile-menu sn-customer-profile-menu"
            ref={customerProfileRef}
          >
            <button
              type="button"
              className="sn-admin-profile-button"
              onClick={() => {
                setCustomerProfileOpen((previous) => !previous);
                setAdminProfileOpen(false);
              }}
              aria-expanded={customerProfileOpen}
              aria-haspopup="true"
              title="Customer menu"
            >
              <span className="sn-admin-initials">CD</span>
              <ChevronDown
                size={14}
                className={customerProfileOpen ? "sn-chevron-open" : ""}
              />
            </button>

            {customerProfileOpen && (
              <div className="sn-profile-dropdown">
                <div className="sn-profile-dropdown-heading">
                  <span className="sn-profile-avatar">
                    <UserRound size={22} />
                  </span>

                  <div>
                    <strong>{customer?.name || "Customer"}</strong>
                    <small>
                      {customer
                        ? "Customer Account Active"
                        : "Customer Access"}
                    </small>
                  </div>
                </div>

                <div className="sn-profile-divider" />

                {!customer && (
                  <>
                    <button
                      type="button"
                      onClick={handleCustomerAccess}
                    >
                      <LogIn size={17} /> Customer Login
                    </button>

                    <Link to="/register" onClick={closeMenu}>
                      <UserRound size={17} /> Register
                    </Link>
                  </>
                )}

                <Link
                  to="/profile"
                  onClick={() => {
                    switchRole("customer");
                    closeMenu();
                  }}
                >
                  <UserRound size={17} /> My Profile
                </Link>

                <Link
                  to="/order-history"
                  onClick={() => {
                    switchRole("customer");
                    closeMenu();
                  }}
                >
                  <Package size={17} /> My Orders
                </Link>

                <Link
                  to="/wishlist"
                  onClick={closeMenu}
                >
                  <Heart size={17} /> My Wishlist
                </Link>

                <Link to="/cart" onClick={closeMenu}>
                  <ShoppingBag size={17} /> My Cart
                </Link>

                {customer && (
                  <>
                    <div className="sn-profile-divider" />

                    <button
                      type="button"
                      className="sn-profile-logout"
                      onClick={() => handleLogout("customer")}
                    >
                      <LogOut size={17} /> Customer Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* MOBILE MENU */}
          <button
            type="button"
            className="sn-icon-button sn-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* SEARCH FORM */}
      {searchOpen && (
        <form className="sn-search-form" onSubmit={handleSearch}>
          <Search size={20} />

          <input
            type="search"
            placeholder="Search products and pages..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            aria-label="Search products and pages"
            autoFocus
          />

          <button type="submit">Search</button>
        </form>
      )}
    </header>
  );
}

export default Navbar;