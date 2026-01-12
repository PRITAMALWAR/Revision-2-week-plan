import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
  { id: 4, name: "Monitor", price: 299 }
];

export default function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛒 Shopping Cart</h1>

      {/* Products */}
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <strong>{product.name}</strong> - ${product.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      {/* Cart */}
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong> (${item.price})
          <div>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <hr />

      {/* Summary */}
      <h2>Summary</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax (10%): ${tax.toFixed(2)}</p>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
