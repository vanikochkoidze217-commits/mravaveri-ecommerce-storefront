// File: src/components/QuickCategories.jsx
import React from 'react';

export default function QuickCategories({ setSelectedCategory, onFilterChange }) {
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    onFilterChange();
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };

  return (
    <div className="quick-categories-grid">
      <div className="q-card" onClick={() => handleCategoryClick("women's clothing")}>
        <div className="q-card-content">
          <span>👗 ქალის ტანსაცმელი</span>
          <span className="q-count">6 პროდუქტი</span>
        </div>
        <span className="q-arrow">↗</span>
      </div>

      <div className="q-card" onClick={() => handleCategoryClick("men's clothing")}>
        <div className="q-card-content">
          <span>💼 კაცის ტანსაცმელი</span>
          <span className="q-count">4 პროდუქტი</span>
        </div>
        <span className="q-arrow">↗</span>
      </div>

      <div className="q-card" onClick={() => handleCategoryClick("jewelery")}>
        <div className="q-card-content">
          <span>💍 სამკაული</span>
          <span className="q-count">4 პროდუქტი</span>
        </div>
        <span className="q-arrow">↗</span>
      </div>

      <div className="q-card" onClick={() => handleCategoryClick("electronics")}>
        <div className="q-card-content">
          <span>🎧 ელექტრონიკა</span>
          <span className="q-count">6 პროდუქტი</span>
        </div>
        <span className="q-arrow">↗</span>
      </div>
    </div>
  );
}