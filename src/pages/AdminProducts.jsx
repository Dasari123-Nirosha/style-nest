
import { useEffect, useState } from "react";
import { products as initialProducts } from "../data/products";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  Package,
} from "lucide-react";

const STORAGE_KEY = "style-nest-admin-products";

function AdminProducts() {
  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem(STORAGE_KEY);
      return savedProducts
        ? JSON.parse(savedProducts)
        : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    name: "",
    category: "Women's Fashion",
    description: "",
    price: "",
    originalPrice: "",
    image: "",
    rating: "4.5",
    reviews: "0",
    inStock: true,
    badge: "",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openAddForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEditForm = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name || "",
      category: product.category || "Women's Fashion",
      description: product.description || "",
      price: product.price ?? "",
      originalPrice: product.originalPrice ?? "",
      image: product.image || "",
      rating: product.rating ?? "4.5",
      reviews: product.reviews ?? "0",
      inStock: product.inStock ?? true,
      badge: product.badge || "",
    });
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      originalPrice: Number(form.originalPrice || form.price),
      rating: Number(form.rating),
      reviews: Number(form.reviews),
    };

    if (
      !productData.name.trim() ||
      !productData.description.trim() ||
      !productData.image.trim() ||
      productData.price <= 0
    ) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    if (editingId !== null) {
      setProducts((previous) =>
        previous.map((product) =>
          product.id === editingId
            ? { ...product, ...productData }
            : product
        )
      );
      alert("Product updated successfully!");
    } else {
      const newProduct = {
        id: Date.now(),
        ...productData,
      };

      setProducts((previous) => [newProduct, ...previous]);
      alert("Product added successfully!");
    }

    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const deleteProduct = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    setProducts((previous) =>
      previous.filter((product) => product.id !== id)
    );
  };

  return (
    <main className="sn-admin-products">
      <div className="sn-admin-products-header">
        <div>
          <span className="sn-admin-eyebrow">INVENTORY MANAGEMENT</span>
          <h1>Products</h1>
          <p>Manage your Style Nest product collection.</p>
        </div>

        <button className="sn-admin-add-button" onClick={openAddForm}>
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="sn-admin-product-summary">
        <div className="sn-admin-summary-icon">
          <Package size={25} />
        </div>
        <div>
          <span>Total Products</span>
          <h2>{products.length}</h2>
        </div>
      </div>

      <div className="sn-admin-product-toolbar">
        <div className="sn-admin-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search products or categories..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <span>{filteredProducts.length} products found</span>
      </div>

      <div className="sn-admin-product-table-wrapper">
        <table className="sn-admin-product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="sn-admin-product-name">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </td>
                <td>
                  <span
                    className={
                      product.inStock
                        ? "sn-admin-stock available"
                        : "sn-admin-stock unavailable"
                    }
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td>
                  <div className="sn-admin-product-actions">
                    <button
                      type="button"
                      title="Edit product"
                      onClick={() => openEditForm(product)}
                    >
                      <Pencil size={17} />
                    </button>
                    <button
                      type="button"
                      title="Delete product"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="5" className="sn-admin-empty">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="sn-admin-modal-overlay">
          <div className="sn-admin-product-modal">
            <div className="sn-admin-modal-header">
              <div>
                <span className="sn-admin-eyebrow">
                  PRODUCT MANAGEMENT
                </span>
                <h2>{editingId !== null ? "Edit Product" : "Add Product"}</h2>
              </div>

              <button
                type="button"
                className="sn-admin-modal-close"
                onClick={() => setShowForm(false)}
                aria-label="Close form"
              >
                <X />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>
                Product Name *
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  required
                />
              </label>

              <label>
                Category *
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option>Women's Fashion</option>
                  <option>Men's Fashion</option>
                  <option>Accessories</option>
                  <option>Home & Living</option>
                </select>
              </label>

              <label>
                Description *
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                  required
                />
              </label>

              <div className="sn-admin-form-row">
                <label>
                  Price (₹) *
                  <input
                    type="number"
                    name="price"
                    min="1"
                    value={form.price}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Original Price (₹)
                  <input
                    type="number"
                    name="originalPrice"
                    min="0"
                    value={form.originalPrice}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label>
                Product Image URL *
                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="/images/products/product.jpg"
                  required
                />
              </label>

              <div className="sn-admin-form-row">
                <label>
                  Rating
                  <input
                    type="number"
                    name="rating"
                    min="0"
                    max="5"
                    step="0.1"
                    value={form.rating}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Reviews
                  <input
                    type="number"
                    name="reviews"
                    min="0"
                    value={form.reviews}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label>
                Product Badge
                <input
                  name="badge"
                  value={form.badge}
                  onChange={handleChange}
                  placeholder="Example: Best Seller"
                />
              </label>

              <label className="sn-admin-stock-checkbox">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={form.inStock}
                  onChange={handleChange}
                />
                Product is in stock
              </label>

              <div className="sn-admin-form-actions">
                <button
                  type="button"
                  className="sn-admin-cancel-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="sn-admin-save-button"
                >
                  {editingId !== null ? "Save Changes" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default AdminProducts;
