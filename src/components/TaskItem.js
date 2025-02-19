import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    updateTask(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="task-item">
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          />
          <input
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
          />
          <select
            value={updatedTask.priority}
            onChange={(e) => setUpdatedTask({ ...updatedTask, priority: e.target.value })}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <div className="buttons">
          <button className = "edit" onClick={() => setIsEditing(true)}>Edit</button>
          <button className = "delete" onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;