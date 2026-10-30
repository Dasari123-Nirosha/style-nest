
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Heart,
  ShoppingBag,
  Package,
  ClipboardList,
  CreditCard,
  LogOut,
  Menu,
  X,
  Clock,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Profile() {
  const { user, logout } = useAuth();
  const { orders } = useOrders();
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const accountMenu = [
    {
      label: "My Profile",
      path: "/profile",
      icon: UserRound,
    },
    {
      label: "My Wishlist",
      path: "/wishlist",
      icon: Heart,
      count: wishlist.length,
    },
    {
      label: "My Cart",
      path: "/cart",
      icon: ShoppingBag,
      count: cartCount,
    },
    {
      label: "My Orders",
      path: "/order-history",
      icon: Package,
      count: orders.length,
    },
    {
      label: "Order History",
      path: "/order-history",
      icon: ClipboardList,
    },
    {
      label: "Checkout",
      path: "/checkout",
      icon: CreditCard,
    },
  ];

  return (
    <main className="sn-account-page">
      <div className="sn-account-heading">
        <span>STYLE NEST ACCOUNT</span>
        <h1>My Account</h1>
        <p>Manage your profile, shopping and orders.</p>
      </div>

      <div className="sn-account-layout">

        {/* ACCOUNT SIDEBAR */}
        <aside className={`sn-account-sidebar ${menuOpen ? "sn-account-sidebar-open" : ""}`}>
          <div className="sn-account-user">
            <div className="sn-account-avatar">
              <UserRound size={30} />
            </div>
            <div>
              <h3>{user?.name || "Customer"}</h3>
              <p>{user?.email}</p>
            </div>
          </div>

          <div className="sn-account-menu">
            <h4>MY ACCOUNT MENU</h4>

            {accountMenu.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  to={item.path}
                  key={`${item.label}-${index}`}
                  className={
                    item.label === "My Profile"
                      ? "sn-account-menu-link sn-account-menu-active"
                      : "sn-account-menu-link"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>

                  {item.count !== undefined && (
                    <small>{item.count}</small>
                  )}
                </Link>
              );
            })}

            <button
              type="button"
              className="sn-account-logout"
              onClick={handleLogout}
            >
              <LogOut size={19} />
              Logout
            </button>
          </div>
        </aside>

        {/* ACCOUNT CONTENT */}
        <section className="sn-account-content">
          <button
            type="button"
            className="sn-account-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
            Account Menu
          </button>

          <div className="sn-account-welcome">
            <span>WELCOME BACK</span>
            <h2>Hello, {user?.name}!</h2>
            <p>Welcome to your personal Style Nest dashboard.</p>
          </div>

          <div className="sn-account-stats">
            <Link to="/wishlist" className="sn-account-stat">
              <Heart size={25} />
              <strong>{wishlist.length}</strong>
              <span>Wishlist Items</span>
            </Link>

            <Link to="/cart" className="sn-account-stat">
              <ShoppingBag size={25} />
              <strong>{cartCount}</strong>
              <span>Cart Items</span>
            </Link>

            <Link to="/order-history" className="sn-account-stat">
              <Package size={25} />
              <strong>{orders.length}</strong>
              <span>Total Orders</span>
            </Link>
          </div>

          <div className="sn-account-recent">
            <div className="sn-account-recent-heading">
              <div>
                <span>YOUR PURCHASES</span>
                <h2>Recent Orders</h2>
              </div>

              <Link to="/order-history">
                View All
              </Link>
            </div>

            {orders.length === 0 ? (
              <div className="sn-account-empty">
                <Package size={42} />
                <h3>No orders yet!</h3>
                <p>Your placed orders will appear here.</p>
                <Link to="/products">Start Shopping</Link>
              </div>
            ) : (
              <div className="sn-account-order-list">
                {orders.slice(0, 3).map((order) => (
                  <article className="sn-account-order" key={order.id}>
                    <div>
                      <strong>{order.id}</strong>
                      <p>
                        {new Date(order.date).toLocaleDateString("en-IN")}
                      </p>
                    </div>

                    <div className="sn-account-order-total">
                      <strong>
                        ₹{Number(order.total).toLocaleString("en-IN")}
                      </strong>
                      <span>
                        <Clock size={13} />
                        {order.status}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile;
