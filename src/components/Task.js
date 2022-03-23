import '../App.css';
import React, { useState } from 'react';

function Task(props) {

    function handleCheckboxClick() {
        props.updateIsDone(true);
        console.log(props.isDone)
    }

    return (
        <li className="todo-container flow-right">
            {props.taskText}
            <input type="checkbox" checked={props.isDone} 
            onClick={()=>{
                props.updateIsDone(true)
                console.log(props.isDone)
                }}>
            </input>
        </li>
    );
}

export default Task;