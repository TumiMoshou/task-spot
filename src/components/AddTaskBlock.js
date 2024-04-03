import React from 'react';
import { Link } from 'react-router-dom'; 

const AddTaskBlock = () => {
    return (
        <div className="add-task-container">
            <Link to="/task-form" className="add-task-button">+ Add Task</Link>
        </div>
    );
}

export default AddTaskBlock;

