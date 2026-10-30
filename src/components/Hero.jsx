
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="sn-hero" id="home">
      <div className="sn-hero-container">
        <div className="sn-hero-content">
          <div className="sn-hero-eyebrow">
            <Sparkles size={16} />
            <span>YOUR STYLE, YOUR SPACE</span>
          </div>

          <h1 className="sn-hero-title">
            Welcome to
            <span>Style Nest</span>
            <span className="sn-hero-title-accent">
              Find Your Style,
              <br />
              Love Your Space.
            </span>
          </h1>

          <p className="sn-hero-description">
            Discover beautiful finds for your wardrobe,
            home, and everyday life. Thoughtfully chosen
            pieces to make every moment feel special.
          </p>

          <div className="sn-hero-actions">
            <Link to="/products" className="sn-hero-button">
              Explore Collection
              <ArrowRight size={19} />
            </Link>

            <span className="sn-hero-note">
              A little beauty in every detail.
            </span>
          </div>

          <div className="sn-hero-highlights">
            <div className="sn-hero-highlight">
              <strong>01</strong>
              <span>Fashion Finds</span>
            </div>

            <div className="sn-hero-highlight">
              <strong>02</strong>
              <span>Home Essentials</span>
            </div>

            <div className="sn-hero-highlight">
              <strong>03</strong>
              <span>Everyday Beauty</span>
            </div>
          </div>
        </div>

        <div className="sn-hero-visual">
          <div className="sn-hero-image-frame">
            <img
              src="/images/style-nest-hero.jpg.jpeg"
              alt="Style Nest fashion and home lifestyle"
              className="sn-hero-image"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
