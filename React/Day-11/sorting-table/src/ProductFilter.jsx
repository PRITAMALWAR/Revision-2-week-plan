import React, { useState } from "react";

const products = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Electronics", "Clothing", "Books", "Home"][i % 4],
  price: Math.floor(Math.random() * 200) + 20,
  inStock: Math.random() > 0.3
}));

export default function ProductFilter() {
  const [filters, setFilters] = useState({
    categories: [],
    minPrice: "",
    maxPrice: "",
    inStock: false
  });

  const applyFilters = (product) => {
    if (
      filters.categories.length &&
      !filters.categories.includes(product.category)
    )
      return false;

    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    if (filters.inStock && !product.inStock) return false;

    return true;
  };

  const filteredProducts = products.filter(applyFilters);

  const toggleCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat]
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      minPrice: "",
      maxPrice: "",
      inStock: false
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Product Filter</h2>

      <div>
        <b>Category:</b><br />
        {["Electronics", "Clothing", "Books", "Home"].map((cat) => (
          <label key={cat} style={{ marginRight: 10 }}>
            <input
              type="checkbox"
              checked={filters.categories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div style={{ marginTop: 10 }}>
        <b>Price:</b><br />
        <input
          type="number"
          placeholder="Min"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters({ ...filters, minPrice: e.target.value })
          }
        />
        {" - "}
        <input
          type="number"
          placeholder="Max"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: e.target.value })
          }
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={() =>
              setFilters({ ...filters, inStock: !filters.inStock })
            }
          />
          In Stock Only
        </label>
      </div>

      <button onClick={clearFilters} style={{ marginTop: 10 }}>
        Clear All Filters
      </button>

      <hr />

      <h3>Products ({filteredProducts.length})</h3>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} | {p.category} | ₹{p.price} |{" "}
            {p.inStock ? "In Stock" : "Out of Stock"}
          </li>
        ))}
      </ul>
    </div>
  );
}
