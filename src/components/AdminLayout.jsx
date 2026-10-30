import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Store,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Manage Products",
      path: "/admin/products",
      icon: Package,
    },
  ];

  return (
    <div className="sn-admin-layout">
      <aside className={`sn-admin-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sn-admin-brand">
          <div className="sn-admin-brand-icon">
            <Store size={24} />
          </div>

          <div>
            <h2>Style Nest</h2>
            <span>ADMIN PANEL</span>
          </div>

          <button
            className="sn-admin-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={21} />
          </button>
        </div>

        <div className="sn-admin-menu-label">MAIN MENU</div>

        <nav className="sn-admin-nav">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/admin"}
              className={({ isActive }) =>
                `sn-admin-nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={19} />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sn-admin-sidebar-bottom">
          <div className="sn-admin-user">
            <div className="sn-admin-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            <div className="sn-admin-user-info">
              <strong>{user?.name || "Administrator"}</strong>
              <span>Administrator</span>
            </div>
          </div>

          <button
            className="sn-admin-logout"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {menuOpen && (
        <div
          className="sn-admin-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main className="sn-admin-main">
        <header className="sn-admin-topbar">
          <button
            className="sn-admin-menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <div>
            <span>Style Nest</span>
            <strong>Administration</strong>
          </div>

          <div className="sn-admin-topbar-user">
            <div className="sn-admin-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <span>{user?.name || "Admin"}</span>
          </div>
        </header>

        <section className="sn-admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default AdminLayout;