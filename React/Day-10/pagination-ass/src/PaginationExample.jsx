import React, { useState, useEffect } from "react";

const generateUsers = () => {
  const users = [];
  for (let i = 1; i <= 100; i++) {
    users.push({ id: i, name: `User ${i}`, email: `user${i}@example.com` });
  }
  return users;
};

export default function PaginationExample() {
  const [products, setProducts] = useState([]); 
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const users = generateUsers();
    setProducts(users);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = products.slice(start, end);

  const getPageNumbers = () => {
    let maxPagesToShow = 5;
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const goToPage = (p) => {
    if (p < 1) p = 1;
    if (p > totalPages) p = totalPages;
    setPage(p);
  };

  const handlePageSizeChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setPage(1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Client-Side Pagination Example</h2>

      <div style={{ marginBottom: "10px" }}>
        Show{" "}
        <select value={itemsPerPage} onChange={handlePageSizeChange}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>{" "}
        items per page
      </div>

      <div style={{ marginBottom: "10px" }}>
        {products.length > 0
          ? `Showing ${start + 1}-${Math.min(end, products.length)} of ${
              products.length
            } results`
          : "No results"}
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "10px",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {user.id}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {user.name}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={() => goToPage(1)} disabled={page === 1}>
          First
        </button>{" "}
        <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
          Previous
        </button>{" "}
        {getPageNumbers().map((p) => (
          <button
            key={p}
            onClick={() => goToPage(p)}
            style={{
              fontWeight: p === page ? "bold" : "normal",
              textDecoration: p === page ? "underline" : "none",
            }}
          >
            {p}
          </button>
        ))}{" "}
        <button onClick={() => goToPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>{" "}
        <button onClick={() => goToPage(totalPages)} disabled={page === totalPages}>
          Last
        </button>
      </div>
    </div>
  );
}
