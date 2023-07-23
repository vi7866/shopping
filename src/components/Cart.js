import React, { useState } from 'react';
import './cart.css';

function Cart({ cart, handleRemoveFromCart, handleUpdateQuantity }) {
  const conversionRate = 74.5; // Conversion rate from dollars to rupees
  const [checkoutTotal, setCheckoutTotal] = useState(null);

  const getTotalAmount = () => {
    const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    return (totalAmount * conversionRate).toFixed(2);
  };

  const handleRemoveClick = (product) => {
    handleRemoveFromCart(product);
  };

  const handleQuantityChange = (product, newQuantity) => {
    handleUpdateQuantity(product, newQuantity);
  };

  const handleCheckout = () => {
    const total = getTotalAmount();
    setCheckoutTotal(total);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p id="price1">No items in the cart.</p>
      ) : (
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p id="price3">Price: ₹{(product.price * conversionRate).toFixed(2)}</p>
              </div>
              <div>
                Quantity:
                <button
                  onClick={() => handleQuantityChange(product, product.quantity - 1)}
                  disabled={product.quantity <= 1}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product, product.quantity + 1)}>+</button>
              </div>
              <button onClick={() => handleRemoveClick(product)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div id="price2">
          <p>Total Amount: ₹{getTotalAmount()}</p>
          {checkoutTotal ? (
            <p>Final Price: ₹{checkoutTotal}</p>
          ) : (
            <button onClick={handleCheckout}>Checkout</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
