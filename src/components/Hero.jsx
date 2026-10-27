// File: src/components/Hero.jsx
import React from "react";

export default function Hero({
  featuredProduct,
  setSelectedCategory,
  onFilterChange,
}) {
  const handleExplore = () => {
    setSelectedCategory("all");
    onFilterChange();
  };

  const handleCardClick = () => {
    if (featuredProduct) {
      setSelectedCategory(featuredProduct.category);
      onFilterChange();
      window.scrollTo({ top: 700, behavior: "smooth" });
    }
  };

  return (
    <section className="hero-unified-box">
      <div className="hero-inner-content">
        <div className="hero-editorial-side">
          <span className="hero-tag">✱ ყოველდღიური აღმოჩენები</span>
          <h1>
            შენი სტილი. შენი დღე.
            <br />
            შენი არჩევანი.
          </h1>
          <p>
            ტანსაცმელი, ტექნოლოგია და პატარა დეტალები, რომლებიც ყოველდღიურობას
            შენსას ხდის.
          </p>
          <button className="hero-main-btn" onClick={handleExplore}>
            აღმოაჩინე კოლექცია ↗
          </button>
        </div>

        <div
          className="hero-product-stage-card"
          onClick={handleCardClick}
          title="გადასვლა კატეგორიაში"
        >
          <div className="hero-product-preview">
            <div className="hero-img-box">
              <img
                src={
                  featuredProduct
                    ? featuredProduct.image
                    : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                }
                alt={
                  featuredProduct
                    ? featuredProduct.title
                    : "Fjallraven Foldsack"
                }
              />
            </div>
            <div className="hero-details-box">
              <span className="hero-edit-label">THE EVERYDAY EDIT</span>
              <h3>
                {featuredProduct
                  ? featuredProduct.title.split(" - ")[0]
                  : "Fjallraven Foldsack"}
              </h3>
              <p className="hero-subdesc">შენი ყოველდღიური თანამგზავრი</p>
              <div className="hero-price-row">
                <span className="hero-price-val">
                  ${featuredProduct ? featuredProduct.price : "109.95"}
                </span>
                <span className="hero-arrow-icon">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
