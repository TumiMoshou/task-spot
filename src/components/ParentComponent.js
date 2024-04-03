import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TaskForm from './TaskForm';
import ViewTasks from './ViewTasks';

function ParentComponent() {
  // Initialize tasks state with an empty array
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  const addTask = newTask => {
    setTasks([...tasks, newTask]);
    navigate('/view-tasks');
  };

  return (
    <Routes>
      <Route path="/" element={<TaskForm addTask={addTask} />} />
      <Route path="/view-tasks" element={<ViewTasks tasks={tasks} />} />
    </Routes>
  );
}

export default ParentComponent;
