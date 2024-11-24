import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import EditTaskModal from "./EditTaskModal";
import "./TaskManager.css";

const TaskManager = ({ onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setSelectedTask(null);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="task-manager">
      <h2>Task Tracker</h2>
      <button onClick={onLogout}>Logout</button>
      <AddTask onAddTask={addTask} />
      {tasks.map((task) => (
        <div key={task.id} className="tasks">
          <h3 className="task">{task.title}</h3>
          <button className="edit-button" onClick={() => setSelectedTask(task)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
      {selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={updateTask}
        />
      )}
    </div>
  );
};

export default TaskManager;
