import React, { useState } from 'react';

function TaskMetadata({ addMetadata }) {
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMetadata({ tags, category });
    setTags('');
    setCategory('');
  };

  return (
    <div className="task-metadata">
      <h2>Task Metadata</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
          />
        </div>
        <button type="submit">Add Metadata</button>
      </form>
    </div>
  );
}

export default TaskMetadata;
