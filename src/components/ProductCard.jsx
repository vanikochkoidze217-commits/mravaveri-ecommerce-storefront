// File: src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({
  product,
  addToCart,
  isFavorite,
  toggleFavorite,
}) {
  const getCategoryLabel = (cat) => {
    switch (cat) {
      case "men's clothing":
        return "კაცის ტანსაცმელი";
      case "women's clothing":
        return "ქალის ტანსაცმელი";
      case "jewelery":
        return "სამკაული";
      case "electronics":
        return "ელექტრონიკა";
      default:
        return cat;
    }
  };

  return (
    <div className="product-card-item">
      <div className="card-image-box">
        <button
          className={`wishlist-btn ${isFavorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(product.id);
          }}
          aria-label="რჩეულებში დამატება"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="card-content-box">
        <span className="cat-tag">{getCategoryLabel(product.category)}</span>

        <h3 className="prod-title" title={product.title}>
          {product.title}
        </h3>

        <div className="prod-rating">
          <span>⭐ {product.rating?.rate || 4.5}</span>
          <span className="rev-count">({product.rating?.count || 120})</span>
        </div>

        <div className="prod-price-cart-row">
          <div className="prod-price-tag">${product.price}</div>
          <button
            className="add-cart-icon-btn"
            onClick={() => addToCart(product)}
            title="კალათაში დამატება"
            aria-label="კალათაში დამატება"
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}
