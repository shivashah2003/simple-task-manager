import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";


const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
