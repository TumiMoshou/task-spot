import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="logo-container">
          <img src="../images/task-spot-logo.png" alt="Task Spot Logo" className="logo" />
        </div>

        <div className="content-container">
          <p className="paragraph-text">Manage your tasks the easy way with Task Spot.</p>
          <Link to="/welcome" className="get-started-button">Get started</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
