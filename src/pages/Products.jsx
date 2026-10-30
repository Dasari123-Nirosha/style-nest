
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  "All Products",
  "Women's Fashion",
  "Men's Fashion",
  "Accessories",
  "Home & Living",
];

function Products() {
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || "All Products";
  const initialSearch = searchParams.get("search") || "";

  const prices = products.map((product) => Number(product.price) || 0);
  const highestPrice = Math.max(...prices, 1000);

  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(initialCategory)
      ? initialCategory
      : "All Products"
  );

  const [search, setSearch] = useState(initialSearch);
  const [sortBy, setSortBy] = useState("featured");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(highestPrice);

  useEffect(() => {
    setSearch(searchParams.get("search") || "");

    const category = searchParams.get("category") || "All Products";

    setSelectedCategory(
      categories.includes(category) ? category : "All Products"
    );
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "All Products") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Search filter
    if (search.trim()) {
      const query = search.trim().toLowerCase();

      result = result.filter((product) =>
        [
          product.name,
          product.category,
          product.description,
        ]
          .filter(Boolean)
          .some((value) =>
            value.toLowerCase().includes(query)
          )
      );
    }

    // Price filter
    result = result.filter((product) => {
      const price = Number(product.price) || 0;
      return price >= minPrice && price <= maxPrice;
    });

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [
    selectedCategory,
    search,
    sortBy,
    minPrice,
    maxPrice,
  ]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All Products");
    setMinPrice(0);
    setMaxPrice(highestPrice);
    setSortBy("featured");
  };

  return (
    <main className="sn-products-page">
      <section className="sn-products-hero">
        <span className="sn-section-eyebrow">
          THE STYLE NEST COLLECTION
        </span>

        <h1>
          Our <span>Collection</span>
        </h1>

        <p>
          Thoughtful finds for your wardrobe and the spaces you love.
        </p>
      </section>

      <section className="sn-products-content">
        {/* SEARCH AND SORT */}
        <div className="sn-products-toolbar">
          <div className="sn-products-search">
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search products"
            />
          </div>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        <div className="sn-products-layout">
          {/* SIDEBAR FILTERS */}
          <aside className="sn-products-sidebar">
            <h2>Categories</h2>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category ? "active" : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}

            {/* PRICE FILTER */}
            <div className="sn-price-filter">
              <h2>Filter by Price</h2>

              <div className="sn-price-values">
                <span>₹{minPrice}</span>
                <span>₹{maxPrice}</span>
              </div>

              <label htmlFor="min-price">
                Minimum Price
              </label>

              <input
                id="min-price"
                type="range"
                min="0"
                max={highestPrice}
                step="50"
                value={minPrice}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setMinPrice(Math.min(value, maxPrice));
                }}
              />

              <label htmlFor="max-price">
                Maximum Price
              </label>

              <input
                id="max-price"
                type="range"
                min="0"
                max={highestPrice}
                step="50"
                value={maxPrice}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setMaxPrice(Math.max(value, minPrice));
                }}
              />
            </div>

            <button
              type="button"
              className="sn-reset-filters"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </aside>

          {/* PRODUCT RESULTS */}
          <div className="sn-products-results">
            <div className="sn-products-results-heading">
              <div>
                <h2>
                  {selectedCategory === "All Products"
                    ? "All Products"
                    : selectedCategory}
                </h2>

                <p>
                  {filteredProducts.length} products found
                </p>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="sn-products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="sn-products-empty">
                <h3>No products found</h3>

                <p>
                  Try changing your search, category or price range.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
