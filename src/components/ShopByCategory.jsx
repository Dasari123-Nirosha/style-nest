
const categories = [
  {
    id: 1,
    name: "Women's Fashion",
    description: "Everyday elegance, beautifully styled.",
    image: "/images/products/womens-fashion.jpg.jpeg",
  },
  {
    id: 2,
    name: "Men's Fashion",
    description: "Timeless essentials for every occasion.",
    image: "/images/products/mens-fashion.jpg.jpeg",
  },
  {
    id: 3,
    name: "Accessories",
    description: "Little details make a big difference.",
    image: "/images/products/accessories.jpg.jpeg",
  },
  {
    id: 4,
    name: "Home & Living",
    description: "Make your space feel like home.",
    image: "/images/products/home-living.jpg.jpeg",
  },
];

function ShopByCategory() {
  return (
    <section className="sn-categories" id="categories">
      <div className="sn-categories-heading">
        <span className="sn-section-eyebrow">
          CURATED FOR YOUR LIFESTYLE
        </span>

        <h2>
          Find Your <span>Style</span>
        </h2>

        <p>
          Explore thoughtful finds for your wardrobe
          and the spaces you love.
        </p>
      </div>

      <div className="sn-category-grid">
        {categories.map((category, index) => (
          <article
            className={`sn-category-card sn-category-${index}`}
            key={category.id}
          >
            <img
              src={category.image}
              alt={category.name}
              className="sn-category-image"
              loading="lazy"
            />

            <div className="sn-category-overlay">
              <span className="sn-category-number">
                0{index + 1}
              </span>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <a
                className="sn-category-link"
                href={`/products?category=${encodeURIComponent(category.name)}`}
              >
                EXPLORE COLLECTION ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategory;
