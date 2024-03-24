import React, { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setUpdatedName(task.name);
  };

  const handleSave = () => {
    if (updatedName.trim() === '') {
      alert('Task name cannot be empty');
      return;
    }
    updateTask({ ...task, name: updatedName });
    setEditing(false);
  };

  const handleChange = e => {
    setUpdatedName(e.target.value);
  };

  return (
    <li>
      {editing ? (
        <>
          <input type="text" value={updatedName} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
