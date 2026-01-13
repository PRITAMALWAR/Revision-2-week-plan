import React, { useState } from "react";

const originalData = [
  { id: 1, name: "Alice", department: "Engineering", salary: 95000, joinDate: "2020-03-15" },
  { id: 2, name: "Bob", department: "Marketing", salary: 75000, joinDate: "2021-07-22" },
  { id: 3, name: "Carol", department: "Engineering", salary: 105000, joinDate: "2019-01-10" },
  { id: 4, name: "David", department: "Sales", salary: 68000, joinDate: "2022-05-30" },
  { id: 5, name: "Eve", department: "HR", salary: 72000, joinDate: "2020-11-12" }
];

export default function EmployeeTable() {
  const [data, setData] = useState(originalData);
  const [column, setColumn] = useState("");
  const [order, setOrder] = useState("");

  const sortTable = (key) => {
    if (column === key && order === "desc") {
      setData(originalData);
      setColumn("");
      setOrder("");
      return;
    }

    const newOrder = order === "asc" ? "desc" : "asc";

    const sorted = [...data].sort((a, b) => {
      if (a[key] > b[key]) return newOrder === "asc" ? 1 : -1;
      if (a[key] < b[key]) return newOrder === "asc" ? -1 : 1;
      return 0;
    });

    setData(sorted);
    setColumn(key);
    setOrder(newOrder);
  };

  const arrow = (key) =>
    column === key ? (order === "asc" ? " up" : " down") : "";

  return (
    <div>
      <h3>Employee Table</h3>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th onClick={() => sortTable("name")}>Name{arrow("name")}</th>
            <th onClick={() => sortTable("department")}>Dept{arrow("department")}</th>
            <th onClick={() => sortTable("salary")}>Salary{arrow("salary")}</th>
            <th onClick={() => sortTable("joinDate")}>Join Date{arrow("joinDate")}</th>
          </tr>
        </thead>

        <tbody>
          {data.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>{emp.joinDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
