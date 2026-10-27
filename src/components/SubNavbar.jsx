import React from 'react';

export default function SubNavbar({ selectedCategory, setSelectedCategory, onFilterChange }) {
  const handleSelect = (category) => {
    setSelectedCategory(category);
    onFilterChange();
  };

  return (
    <nav className="sub-navigation">
      <div className="sub-nav-inner">
        <button 
          className={`sub-tab ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleSelect('all')}
        >
          ყველა პროდუქტი
        </button>
        <button 
          className={`sub-tab ${selectedCategory === "women's clothing" ? 'active' : ''}`} 
          onClick={() => handleSelect("women's clothing")}
        >
          ქალის ტანსაცმელი
        </button>
        <button 
          className={`sub-tab ${selectedCategory === "men's clothing" ? 'active' : ''}`} 
          onClick={() => handleSelect("men's clothing")}
        >
          კაცის ტანსაცმელი
        </button>
        <button 
          className={`sub-tab ${selectedCategory === "jewelery" ? 'active' : ''}`} 
          onClick={() => handleSelect("jewelery")}
        >
          სამკაული
        </button>
        <button 
          className={`sub-tab ${selectedCategory === "electronics" ? 'active' : ''}`} 
          onClick={() => handleSelect("electronics")}
        >
          ელექტრონიკა
        </button>
      </div>
    </nav>
  );
}