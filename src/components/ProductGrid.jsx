// File: src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ 
  products, 
  filteredCount, 
  addToCart, 
  favorites, 
  toggleFavorite, 
  itemsPerPage, 
  setItemsPerPage 
}) {
  return (
    <section className="products-listing-area">
      <div className="listing-top-bar">
        <h2>ყველა პროდუქტი <span className="count-tag">{filteredCount}</span></h2>
        <div className="sorting-box">
          <span>დალაგება:</span>
          <select className="sort-selector" aria-label="პროდუქტების დალაგება">
            <option>რეკომენდებული</option>
            <option>ფასით: ზრდადი</option>
            <option>ფასით: კლებადი</option>
          </select>
        </div>
      </div>

      <div className="products-grid-container">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
            isFavorite={favorites.includes(product.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <div className="pagination-info-text">
        ნაჩვენებია {products.length} პროდუქტი {filteredCount}-დან
      </div>

      {filteredCount > itemsPerPage && itemsPerPage < filteredCount && (
        <div className="pagination-row">
          <button className="load-more-btn" onClick={() => setItemsPerPage(prev => prev + 4)}>
            მეტის ნახვა ↓
          </button>
        </div>
      )}
    </section>
  );
}