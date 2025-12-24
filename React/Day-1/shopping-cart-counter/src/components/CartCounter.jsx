import { useState } from "react";

function CartCounter() {
  const [qty, setQty] = useState(1);

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "220px" }}>
      <h3>Product</h3>

      <p>Price: $29.99</p>

      {/* Counter */}
      <button onClick={() => setQty(qty - 1)} disabled={qty === 1}>-</button>
      <p>{qty}</p>
      <button onClick={() => setQty(qty + 1)}>+</button>

      {qty >= 5 && (
        <p style={{ color: "green" }}>
          10% Bulk Discount Applied
        </p>
      )}

      <p>
        Total: $
        {(
          qty * 29.99 * (qty >= 5 ? 0.9 : 1)
        ).toFixed(2)}
      </p>
    </div>
  );
}

export default CartCounter;
