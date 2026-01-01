import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: "1", text: "Complete React project", priority: "High", completed: false },
    { id: "2", text: "Review PRs", priority: "Medium", completed: true },
    { id: "3", text: "Update documentation", priority: "Low", completed: false },
  ]);

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTodo = () => {
    if (!text) return;
    setTodos([
      ...todos,
      { id: Date.now().toString(), text, priority, completed: false },
    ]);
    setText("");
    setPriority("Low");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getColor = (p) => (p === "High" ? "red" : p === "Medium" ? "orange" : "green");

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
              {todo.text}
            </span>
            <span style={{ color: getColor(todo.priority), marginLeft: "5px" }}>
              [{todo.priority}]
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
