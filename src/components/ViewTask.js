import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ViewTask({ tasks, markTaskComplete, deleteTask }) {
  const { taskId } = useParams();
  const navigate = useNavigate(); 

  const [task, setTask] = useState(null);

  useEffect(() => {
    console.log("taskId in ViewTask:", taskId);
    console.log("tasks in ViewTask:", tasks);
    const foundTask = tasks.find(task => task.id === parseInt(taskId));
    setTask(foundTask);
  }, [taskId, tasks]);

  if (!task) {
    return <div>Loading...</div>;
  }

  const handleMarkComplete = () => {
    if (window.confirm("Are you sure you want to mark this task as complete?")) {
      deleteTask(task.id); 
      navigate('/view-tasks');
    }
  };

  const handleDeleteTask = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
      navigate('/view-tasks');
    }
  };

  return (
    <div className="task-container">
      {/* Navigation */}
      <div className="navigation-container">
        <div className="logo-nav-menu">
          <img src="../images/task-spot-logo.png" alt="Task Spot Logo" className="logo-nav-menu" />
        </div>
        <div className="navigation-menu">
          <Link to="/welcome" className="menu-item welcome-page-link">Welcome Page</Link>
          <Link to="/task-form" className="menu-item create-task-link">Create Task</Link>
          <Link to="/view-tasks" className="menu-item">View Tasks</Link> 
        </div>
      </div>

      {/* View Task */}
      <div className="view-task-container">
        <h2 className="view-task-title">View Task</h2>
        <div className="task-details">
          <h3>{task.name}</h3>
          <p>Category: {task.category}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Start Time: {task.startTime}</p>
          <p>End Time: {task.endTime}</p>
          <p>Description: {task.description}</p>
          <div className="task-buttons">
            <button onClick={handleMarkComplete} className="mark-complete">Mark as Complete</button>
            <button onClick={handleDeleteTask} className="delete-task">Delete Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTask;
