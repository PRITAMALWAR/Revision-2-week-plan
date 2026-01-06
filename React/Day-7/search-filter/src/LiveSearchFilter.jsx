import React, { useEffect, useState } from "react";

const productsData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Electronics", "Clothing", "Food", "Books"][i % 4],
  price: (Math.random() * 100 + 10).toFixed(2),
}));

function LiveSearchFilter() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);

    const timer = setTimeout(() => {
      const result = productsData.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredProducts(result);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Product Search</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      {isSearching && <p>Searching...</p>}

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> | {product.category} | $
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveSearchFilter;
