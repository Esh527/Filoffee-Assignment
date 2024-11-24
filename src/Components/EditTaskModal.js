import React, { useState } from "react";
import "./EditTaskModal.css";

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedTask.title || !editedTask.description || !editedTask.dueDate) {
      alert("Please fill out all fields");
      return;
    }
    onSave(editedTask);
  };

  return (
    <div className="edit-task-modal">
      <div className="modal-content">
        <h3>Edit Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={editedTask.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleChange}
          />
          <select
            name="status"
            value={editedTask.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
