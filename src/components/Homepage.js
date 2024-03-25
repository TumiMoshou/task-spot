import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        {/* Logo on the left */}
        <div className="logo-container">
          <img src="../images/task-spot-logo.png" alt="Task Spot Logo" className="logo" />
        </div>

        {/* Text and button on the right */}
        <div className="content-container">
          {/* App Description */}
          <p className="paragraph-text">Manage your tasks the easy way with Task Spot.</p>

          {/* Get Started Button */}
          <Link to="/task-form" className="get-started-button">Get started</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
