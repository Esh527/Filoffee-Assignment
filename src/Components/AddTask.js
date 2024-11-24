import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description || !task.dueDate) {
      alert("Please fill out all fields");
      return;
    }
    onAddTask({ ...task, id: Date.now() });
    setTask({ title: "", description: "", dueDate: "", status: "Pending" });
  };

  return (
    <div className="add-task-container">
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
