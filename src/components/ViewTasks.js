import React from 'react';
import { Link } from 'react-router-dom';

function ViewTasks({ tasks, markTaskComplete, deleteTask }) {
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [filterCategory, setFilterCategory] = React.useState('All');

  React.useEffect(() => {
    if (!tasks || tasks.length === 0) {
      setFilteredTasks([]);
      return;
    }

    let filtered = tasks;

    if (filterCategory !== 'All') {
      filtered = filtered.filter(task => task.category === filterCategory);
    }

    setFilteredTasks(filtered);
  }, [tasks, filterCategory]);

  const handleCategoryChange = category => {
    setFilterCategory(category);
  };

  return (
    <div className="task-container">
      <div className="navigation-container">
        <div className="logo-nav-menu">
          <img src="../images/task-spot-logo.png" alt="Task Spot Logo" className="logo-nav-menu" />
        </div>
        <div className="navigation-menu">
          <Link to="/welcome" className="menu-item welcome-page-link">Welcome Page</Link>
          <Link to="/task-form" className="menu-item">Create Task</Link>
        </div>
      </div>

      <div className="view-tasks-container">
        <h2 className="view-tasks-title">View Tasks</h2>
        
        {/* Filter heading and buttons */}
        <div className="filter-container">
          <h3 className="filter-title">Filter:</h3>
          <div className="filter-buttons">
            <button
              className={filterCategory === 'All' ? 'active' : ''}
              onClick={() => handleCategoryChange('All')}
            >
              All
            </button>
            <button
              className={filterCategory === 'work' ? 'active' : ''}
              onClick={() => handleCategoryChange('work')}
            >
              Work
            </button>
            <button
              className={filterCategory === 'personal' ? 'active' : ''}
              onClick={() => handleCategoryChange('personal')}
            >
              Personal
            </button>
            <button
              className={filterCategory === 'social' ? 'active' : ''}
              onClick={() => handleCategoryChange('social')}
            >
              Social
            </button>
          </div>
        </div>

        {/* Display filtered tasks */}
        <div className="task-list">
          {filteredTasks.map(task => (
            <div key={task.id} className="task-block">
              <div className="task-content">
                <h3>{task.name}</h3>
                <p>Category: {task.category}</p>
              </div>
              <div className="task-actions">
                <Link to={`/view-task/${task.id}`} className="view-task-link">View Task</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewTasks;
