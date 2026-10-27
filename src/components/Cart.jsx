// File: src/components/Cart.jsx
import React from 'react';

export default function Cart({ cartItems, removeFromCart, updateQuantity, onClose }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + Number(item.price) * (item.quantity || 1), 0);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>თქვენი კალათა</h2>
          <button className="close-cart-btn" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>🛒 კალათა ცარიელია</p>
            <span>აირჩიეთ სასურველი პროდუქტები</span>
          </div>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item-row" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 title={item.title}>{item.title}</h4>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                <div className="cart-item-actions-group">
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-item-btn" onClick={() => removeFromCart(item.id)} title="წაშლა">
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <div className="cart-total-row">
            <span>სულ ჯამი:</span>
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" disabled={cartItems.length === 0} onClick={() => alert('შეკვეთა წარმატებით გაფორმდა!')}>
            შეკვეთის გაფორმება
          </button>
        </div>
      </div>
    </div>
  );
}