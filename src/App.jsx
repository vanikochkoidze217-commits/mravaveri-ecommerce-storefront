import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SubNavbar from "./components/SubNavbar";
import Hero from "./components/Hero";
import QuickCategories from "./components/QuickCategories";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import FooterSection from "./components/FooterSection";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedRating, setSelectedRating] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const backpackProduct = products.find(
    (p) => p.id === 1 || p.title.toLowerCase().includes("backpack"),
  );

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesRating =
      selectedRating === 0 ||
      (product.rating && product.rating.rate >= selectedRating);
    return matchesCategory && matchesSearch && matchesPrice && matchesRating;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = (item.quantity || 1) + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }),
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  return (
    <div className="store-container">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
        favoritesCount={favorites.length}
        onOpenCart={() => setIsCartOpen(true)}
        onFilterChange={handleFilterChange}
      />

      <SubNavbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onFilterChange={handleFilterChange}
      />

      <main className="main-content-area">
        <Hero
          featuredProduct={backpackProduct}
          setSelectedCategory={setSelectedCategory}
          onFilterChange={handleFilterChange}
        />

        <QuickCategories
          setSelectedCategory={setSelectedCategory}
          onFilterChange={handleFilterChange}
        />

        <div className="catalog-wrapper">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            totalCount={products.length}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            onFilterChange={handleFilterChange}
          />

          <ProductGrid
            products={currentProducts}
            filteredCount={filteredProducts.length}
            addToCart={addToCart}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
          />
        </div>
      </main>

      <FooterSection
        setSelectedCategory={setSelectedCategory}
        onFilterChange={handleFilterChange}
      />

      {isCartOpen && (
        <Cart
          cartItems={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}
