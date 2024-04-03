import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function TaskForm({ addTask }) {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!taskName.trim()) return;

    addTask({
      id: Date.now(),
      name: taskName,
      category,
      dueDate,
      startTime,
      endTime,
      priority,
      description,
    });

    // Redirect to View Tasks page upon task creation
    navigate('/view-tasks');
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
          <Link to="/view-tasks" className="menu-item">View Tasks</Link>
        </div>
      </div>

      {/* Task Form */}
      <div className="task-form-container">
        <form onSubmit={handleFormSubmit} className="task-form">
          <h2 className="add-task-heading">Add Task</h2>

          <div className="form-group title-section">
            <label htmlFor="taskName" className="task-title">Task Title</label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              placeholder="Add task name"
              required
            />
          </div>

          <div className="form-group category-section">
            <label htmlFor="category" className="category-title">Category</label>
            <div className="category-options">
              <button
                type="button"
                className={`category-button work${category === 'work' ? ' active' : ''}`}
                onClick={() => setCategory('work')}
              >
                Work
              </button>
              <button
                type="button"
                className={`category-button personal${category === 'personal' ? ' active' : ''}`}
                onClick={() => setCategory('personal')}
              >
                Personal
              </button>
              <button
                type="button"
                className={`category-button social${category === 'social' ? ' active' : ''}`}
                onClick={() => setCategory('social')}
              >
                Social
              </button>
            </div>
          </div>

          <div className="form-group date-section">
            <label htmlFor="dueDate" className="due-date-title">Due Date</label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="styled-input"
            />
          </div>

          <div className="form-group time-section">
            <div className="time-options">
              <div>
                <label htmlFor="startTime" className="start-time">Start Time</label>
                <input
                  type="time"
                  id="startTime"
                  value={startTime}
                  onChange={e => setStartTime(e.target.value)}
                  className="styled-input"
                />
              </div>
              <div>
                <label htmlFor="endTime" className="end-time">End Time</label>
                <input
                  type="time"
                  id="endTime"
                  value={endTime}
                  onChange={e => setEndTime(e.target.value)}
                  className="styled-input"
                />
              </div>
            </div>
          </div>

          <div className="form-group description-section">
            <label htmlFor="description" className="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Add task description"
              className="styled-input"
            />
          </div>

          <button type="submit" className="create-task-submit-button">Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
