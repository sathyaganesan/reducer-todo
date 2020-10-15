import React from 'react';
import { ACTIONS } from '../Reducers/Reducer';
// import './App.css';


export const Todo = (props) => {

    const togglefcn = (id) => {
        props.dispatch({ type: ACTIONS.TOOGLE, payload: id });
    }

    return (
        <div className={`todo ${props.todoAttr.completed ? "completed" : ""}`}
        onClick={()=> togglefcn(props.todoAttr.id)}>
            {/* Item from state  */}
            <p className = "todo-item">{props.todoAttr.item}</p>
        </div>
    )
}