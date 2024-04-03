import React from 'react';
import { Link } from 'react-router-dom'; 

const ViewTasksBlock = () => {
    return (
        <div className="view-tasks-container">
            <Link to="/view-tasks" className="view-tasks-button">View Tasks</Link>
        </div>
    );
}

export default ViewTasksBlock;
