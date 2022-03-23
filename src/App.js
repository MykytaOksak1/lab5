import './App.css';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { taskText: "new task", isDone: false }
  ]);
  const [taskCount, setTaskCount] = useState(1);
  const [undoneTaskCount, setUndoneTaskCount] = useState(1);

  function newTodo() {
    setTasks([...tasks, { taskText: "new task", isDone: false }]);
    setTaskCount(taskCount + 1);
    setUndoneTaskCount(undoneTaskCount + 1)
  }

  return (
    <div className="container center">
      <h1 className="center title">My TODO App</h1>
      <div className="flow-right controls">
        <span>Item count: {taskCount}</span>
        <span>Unchecked count: {undoneTaskCount}</span>
      </div>
      <button className="button center" onClick={() => newTodo()}>New TODO</button>
      <ul id="todo-list" className="todo-list">
        {tasks.map((task, index) =>
          <li key={index} className="todo-container flow-right">
            {task.taskText}
            <input 
              type="checkbox" 
              checked={task.isDone}
              readOnly={true}
              onClick={() => {
                let newTaskList = [...tasks];
                newTaskList[index].isDone = !task.isDone;
                setTasks([...newTaskList]);
                if(task.isDone) setUndoneTaskCount(undoneTaskCount - 1);
                else setUndoneTaskCount(undoneTaskCount + 1);
              }}>
            </input>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
