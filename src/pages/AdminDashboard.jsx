
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  ShoppingBag,
  CircleCheck,
  CircleAlert,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { products as initialProducts } from "../data/products";

const STORAGE_KEY = "style-nest-admin-products";

function AdminDashboard() {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  useEffect(() => {
    const updateProducts = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        setProducts(saved ? JSON.parse(saved) : initialProducts);
      } catch {
        setProducts(initialProducts);
      }
    };

    window.addEventListener("storage", updateProducts);
    return () => window.removeEventListener("storage", updateProducts);
  }, []);

  const totalProducts = products.length;
  const inStock = products.filter((product) => product.inStock).length;
  const outOfStock = totalProducts - inStock;
  const categories = new Set(products.map((product) => product.category)).size;
  const recentProducts = [...products].slice(-5).reverse();

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      className: "products",
    },
    {
      title: "In Stock",
      value: inStock,
      icon: CircleCheck,
      className: "in-stock",
    },
    {
      title: "Out of Stock",
      value: outOfStock,
      icon: CircleAlert,
      className: "out-stock",
    },
    {
      title: "Categories",
      value: categories,
      icon: ShoppingBag,
      className: "categories",
    },
  ];

  return (
    <main className="sn-admin-dashboard">
      <header className="sn-admin-dashboard-header">
        <div>
          <span className="sn-admin-eyebrow">STYLE NEST ADMINISTRATION</span>
          <h1>Dashboard</h1>
          <p>Welcome to your store management dashboard.</p>
        </div>

        <Link to="/admin/products" className="sn-admin-add-button">
          <Plus size={18} />
          Manage Products
        </Link>
      </header>

      <section className="sn-admin-stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              className={`sn-admin-stat-card ${stat.className}`}
              key={stat.title}
            >
              <div className="sn-admin-stat-top">
                <span>{stat.title}</span>
                <div className="sn-admin-stat-icon">
                  <Icon size={22} />
                </div>
              </div>
              <h2>{stat.value}</h2>
              <p>Current store overview</p>
            </article>
          );
        })}
      </section>

      <section className="sn-admin-dashboard-content">
        <div className="sn-admin-recent-card">
          <div className="sn-admin-section-heading">
            <div>
              <span className="sn-admin-eyebrow">YOUR INVENTORY</span>
              <h2>Recent Products</h2>
            </div>

            <Link to="/admin/products" className="sn-admin-view-all">
              View All <ArrowUpRight size={16} />
            </Link>
          </div>

          {recentProducts.length > 0 ? (
            <div className="sn-admin-recent-list">
              {recentProducts.map((product) => (
                <div className="sn-admin-recent-item" key={product.id}>
                  <img src={product.image} alt={product.name} />

                  <div className="sn-admin-recent-info">
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                  </div>

                  <strong>
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </strong>

                  <span
                    className={
                      product.inStock
                        ? "sn-admin-stock available"
                        : "sn-admin-stock unavailable"
                    }
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="sn-admin-dashboard-empty">
              No products available yet.
            </p>
          )}
        </div>

        <aside className="sn-admin-quick-card">
          <div className="sn-admin-quick-icon">
            <Package size={28} />
          </div>
          <span className="sn-admin-eyebrow">QUICK ACTION</span>
          <h2>Manage Your Collection</h2>
          <p>
            Add new products, update product information and manage
            your store inventory.
          </p>
          <Link to="/admin/products" className="sn-admin-quick-button">
            Open Product Management <ArrowUpRight size={17} />
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default AdminDashboard;
