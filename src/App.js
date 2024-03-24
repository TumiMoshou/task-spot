import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import firebase from './firebase';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from Firebase Firestore on component mount
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('tasks').get();
      setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  // Add a new task to the Firestore collection
  const addTask = async task => {
    try {
      const db = firebase.firestore();
      const docRef = await db.collection('tasks').add(task);
      setTasks([...tasks, { ...task, id: docRef.id }]);
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  // Delete a task from the Firestore collection
  const deleteTask = async id => {
    try {
      const db = firebase.firestore();
      await db.collection('tasks').doc(id).delete();
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task: ', error);
    }
  };

  return (
    <div className="App">
      <h1>Task Spot</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
