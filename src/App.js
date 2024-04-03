import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ParentComponent from './components/ParentComponent';
import TaskMetadata from './components/TaskMetadata';
import TaskList from './components/TaskList';
import WelcomePage from './components/WelcomePage';
import TaskForm from './components/TaskForm';
import ViewTasks from './components/ViewTasks';
import ViewTask from './components/ViewTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const markTaskComplete = taskId => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    
    setTasks(updatedTasks);
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/task-form" element={<TaskForm addTask={addTask} />} />
          <Route path="/task-metadata" element={<TaskMetadata />} />
          <Route path="/task-list" element={<TaskList />} />
          <Route path="/welcome" element={<WelcomePage tasks={tasks} />} />
          <Route path="/view-tasks" element={<ViewTasks tasks={tasks} />} />
          <Route
            path="/view-task/:taskId"
            element={<ViewTask tasks={tasks} markTaskComplete={markTaskComplete} deleteTask={deleteTask} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
