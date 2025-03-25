import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetProductsCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const img_url = "https://Jimmie.pythonanywhere.com/static/images/"

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to remove a single instance of a product from the cart
  const removeFromCart = (id) => {
    const storedCart = [...cart]; // Create a copy of the cart
    const index = storedCart.findIndex((product) => product.id === id);

    if (index !== -1) {
      storedCart.splice(index, 1); // Remove only the first matching product
      setCart(storedCart);
      localStorage.setItem("cart", JSON.stringify(storedCart));
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + (product.product_cost || 0), 0);

  // Handle checkout
  const handleProceedToPayment = () => {
    if (cart.length === 0) return; // Prevent navigation if the cart is empty
    navigate("/payment", { state: { totalPrice } });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛍️</p>
      ) : (
        <div className="cart-items">
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={img_url + product.product_photo} alt={product.product_name} className="cart-img" />
              <div className="cart-details">
                <h3>{product.product_name}</h3>
                <p>{product.product_description}</p>
                <strong className="cart-price">Price: {product.product_cost} Ksh</strong>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
          <h3 className="cart-total">Total: Ksh {totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={handleProceedToPayment} disabled={cart.length === 0}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default GetProductsCart;
