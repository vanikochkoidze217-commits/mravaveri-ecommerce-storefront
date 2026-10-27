// File: src/components/Header.jsx
import React from 'react';

export default function Header({ searchQuery, setSearchQuery, cartCount, favoritesCount, onOpenCart, onFilterChange }) {
  return (
    <>
      <div className="top-banner-notice">
        მრავალპროფილური ონლაინ მაღაზია
      </div>
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-box">
            <span className="logo-icon">✱</span>
            <span className="logo-title">მრავალო</span>
          </div>

          <div className="search-wrapper">
            <span>🔍</span>
            <input 
              type="text" 
              placeholder="ძიება პროდუქტებში..." 
              aria-label="ძიება პროდუქტებში"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); onFilterChange(); }}
            />
          </div>

          <div className="header-tools">
            <button className="tool-btn" title="პროფილი" aria-label="პროფილი">👤</button>
            <button className="tool-btn" title="რჩეულები" aria-label="რჩეულები">
              ❤️ {favoritesCount > 0 && <span className="fav-badge">{favoritesCount}</span>}
            </button>
            <button className="cart-action-btn" onClick={onOpenCart} aria-label="კალათა">
              🛒 <span className="badge">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}