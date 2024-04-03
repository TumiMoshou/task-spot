import React from 'react';

const WeeklyProgress = ({ tasks }) => {
    // Define an array of quotes
    const quotes = [
        "\"Your worth is not measured by your productivity. Take breaks, rest, and prioritize your mental well-being.\"",
        "\"Progress, not perfection. Celebrate the small victories and be kind to yourself on the journey.\"",
        "\"You are not defined by your to-do list. Your value lies in who you are, not what you do.\"",
        "\"Embrace progress over perfection. Every step forward is a step in the right direction.\""
    ];

    // Get the current week number
    const getCurrentWeek = () => {
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 0);
        const diff = today - startOfYear;
        const oneWeek = 1000 * 60 * 60 * 24 * 7;
        const weekNumber = Math.floor(diff / oneWeek);
        return weekNumber;
    };

    // Helper function to check if a task is within the current week
    const isTaskWithinCurrentWeek = (task) => {
        const currentWeek = getCurrentWeek();
        const taskDate = new Date(task.dateCreated); 
        const startOfWeek = new Date(taskDate.getFullYear(), 0, 0);
        const diff = taskDate - startOfWeek;
        const oneWeek = 1000 * 60 * 60 * 24 * 7;
        const taskWeek = Math.floor(diff / oneWeek);
        return taskWeek === currentWeek;
    };

    // Determine the index of the quote based on the current week
    const currentWeek = getCurrentWeek();
    const quoteIndex = currentWeek % quotes.length;
    const selectedQuote = quotes[quoteIndex];

    // Calculate tasks completed this week
    const tasksCompletedThisWeek = tasks.filter(task => {
        return task.completed && isTaskWithinCurrentWeek(task);
    }).length;

    return (
        <div className="weekly-progress">
            <p>{selectedQuote}</p>
        </div>
    );
}

export default WeeklyProgress;
