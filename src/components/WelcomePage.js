import React from 'react';
import { Link } from 'react-router-dom';
import AddTaskBlock from './AddTaskBlock'; 
import ViewTasksBlock from './ViewTasksBlock'; 
import WeeklyProgress from './WeeklyProgress'; 

const WelcomePage = ({ tasks }) => {
    return (
        <div className="welcome-page">
            {/* Navigation Menu */}
            <div className="navigation-container">
                <div className="logo-nav-menu">
                    <img src="../images/task-spot-logo.png" alt="Task Spot Logo" className="logo-nav-menu" />
                </div>
                <div className="navigation-menu">
                    <Link to="/task-form" className="menu-item create-task-link">Create Task</Link>
                    <Link to="/view-tasks" className="menu-item">View Tasks</Link>
                </div>
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="welcome-message">
                    <h2 className="greeting">Hello Imani,</h2>
                    <p className="welcome-back-message">Welcome Back</p>
                </div>

                <h3>My Tasks</h3>
                <div className="tasks-section">
                    <AddTaskBlock /> 
                    <ViewTasksBlock /> 
                </div>

                <h3>Weekly Motivation</h3>
                <WeeklyProgress tasks={tasks} /> 
            </div>
        </div>
    );
}

export default WelcomePage;
