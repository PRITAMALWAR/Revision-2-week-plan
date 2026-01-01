import React, { useState } from "react";

const DragReorder = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Task 1" },
    { id: "2", text: "Task 2" },
    { id: "3", text: "Task 3" },
  ]);

  const moveUp = (index) => {
    if (index === 0) return; 
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]]; 
    setTasks(newTasks);
  };

  const moveDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]]; 
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <span>
              {index + 1}. {task.text}{" "}
            </span>
            <button onClick={() => moveUp(index)} disabled={index === 0}>
              Move Up
            </button>
            <button
              onClick={() => moveDown(index)}
              disabled={index === tasks.length - 1}
            >
              Move Down
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragReorder;
