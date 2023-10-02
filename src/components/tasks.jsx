import React from 'react'
import { useState } from 'react';

function Tasks()  {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    // Добавление новой задачи
    const addTask = () => {
        if (taskText.trim() !== '') {
            setTasks([...tasks, taskText]);
            setTaskText('');
        }
    };

    // Удаление задачи
    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Добавить задачу"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={addTask}>Добавить</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
