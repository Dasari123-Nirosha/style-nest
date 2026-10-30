
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShopByCategory from "../components/ShopByCategory";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ShopByCategory />

        <section className="sn-collection" id="collection">
          <div className="sn-collection-heading">
            <span className="sn-section-eyebrow">
              THOUGHTFULLY CHOSEN FOR YOU
            </span>

            <h2>
              Our <span>Collection</span>
            </h2>

            <p>
              Discover beautiful finds for your wardrobe,
              home, and everyday life.
            </p>
          </div>

          <div className="sn-product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="sn-collection-footer">
            <a href="/products" className="sn-view-all">
              VIEW ALL PRODUCTS <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
