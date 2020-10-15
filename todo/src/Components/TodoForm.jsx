import React, { useState } from 'react';
import { ACTIONS } from '../Reducers/Reducer';

// either way is fine
// export const TodoForm = ({dispatch}) => {

export const TodoForm = (props) => {

    const [newTodoItem, setNewTodoItem] = useState("");

    const onChangeHandler = (e) => {
        e.preventDefault();
        setNewTodoItem(e.target.value);
    }

    const addTodofcn = (e) => {
        e.preventDefault();
        props.dispatch({ type: ACTIONS.ADDTODO, payload: { item: newTodoItem, completed: false, id: Date.now() } })
        setNewTodoItem('');
    }

    const deletefcn = (e) => {
        e.preventDefault();
        props.dispatch({ type: ACTIONS.DELETE });
    }

    return (
        <form>
            <input
                type="text"
                name="newTodoItem"
                value={newTodoItem}
                onChange={onChangeHandler} />
            <div>
                <button onClick={addTodofcn}>Add Todo</button>
                <button onClick={deletefcn}>Clear Item</button>
            </div>
            
        </form>
    )
}