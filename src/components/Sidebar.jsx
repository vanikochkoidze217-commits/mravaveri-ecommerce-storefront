// File: src/components/Sidebar.jsx
import React from 'react';

export default function Sidebar({ 
  selectedCategory, 
  setSelectedCategory, 
  totalCount, 
  priceRange, 
  setPriceRange, 
  selectedRating, 
  setSelectedRating,
  onFilterChange 
}) {
  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedRating(0);
    setPriceRange({ min: 0, max: 1000 });
    onFilterChange();
  };

  return (
    <aside className="filters-sidebar">
      <div className="sidebar-title-row">
        <h3>ფილტრები</h3>
        <button className="reset-icon-btn" onClick={resetFilters} title="გასუფთავება" aria-label="ფილტრების გასუფთავება">🔄</button>
      </div>

      <div className="filter-block">
        <h4>კატეგორია</h4>
        <label className="filter-label">
          <input type="radio" name="cat" checked={selectedCategory === 'all'} onChange={() => { setSelectedCategory('all'); onFilterChange(); }} aria-label="ყველა პროდუქტი" />
          ყველა პროდუქტი <span className="item-count">{totalCount}</span>
        </label>
        <label className="filter-label">
          <input type="radio" name="cat" checked={selectedCategory === "women's clothing"} onChange={() => { setSelectedCategory("women's clothing"); onFilterChange(); }} aria-label="ქალის ტანსაცმელი" />
          ქალის ტანსაცმელი <span className="item-count">6</span>
        </label>
        <label className="filter-label">
          <input type="radio" name="cat" checked={selectedCategory === "men's clothing"} onChange={() => { setSelectedCategory("men's clothing"); onFilterChange(); }} aria-label="კაცის ტანსაცმელი" />
          კაცის ტანსაცმელი <span className="item-count">4</span>
        </label>
        <label className="filter-label">
          <input type="radio" name="cat" checked={selectedCategory === "jewelery"} onChange={() => { setSelectedCategory("jewelery"); onFilterChange(); }} aria-label="სამკაული" />
          სამკაული <span className="item-count">4</span>
        </label>
        <label className="filter-label">
          <input type="radio" name="cat" checked={selectedCategory === "electronics"} onChange={() => { setSelectedCategory("electronics"); onFilterChange(); }} aria-label="ელექტრონიკა" />
          ელექტრონიკა <span className="item-count">6</span>
        </label>
      </div>

      <div className="filter-block">
        <h4>ფასი (USD / $)</h4>
        <div className="price-inputs-row">
          <input 
            type="number" 
            aria-label="მინიმალური ფასი" 
            value={priceRange.min} 
            onChange={(e) => { setPriceRange({...priceRange, min: Number(e.target.value)}); onFilterChange(); }} 
          />
          <span>-</span>
          <input 
            type="number" 
            aria-label="მაქსიმალური ფასი" 
            value={priceRange.max} 
            onChange={(e) => { setPriceRange({...priceRange, max: Number(e.target.value)}); onFilterChange(); }} 
          />
        </div>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          className="price-slider"
          aria-label="ფასის სლაიდერი"
          value={priceRange.max} 
          onChange={(e) => { setPriceRange({...priceRange, max: Number(e.target.value)}); onFilterChange(); }} 
        />
      </div>

      <div className="filter-block">
        <h4>შეფასება</h4>
        <label className="filter-label">
          <input type="radio" name="rating" checked={selectedRating === 0} onChange={() => { setSelectedRating(0); onFilterChange(); }} aria-label="ყველა შეფასება" /> ყველა შეფასება
        </label>
        <label className="filter-label">
          <input type="radio" name="rating" checked={selectedRating === 4} onChange={() => { setSelectedRating(4); onFilterChange(); }} aria-label="4.0 და მეტი შეფასება" /> 4.0 და მეტი
        </label>
      </div>
    </aside>
  );
}