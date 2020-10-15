import React, { useReducer } from 'react';
import { reducerfcn, initialState } from '../Reducers/Reducer';
import { TodoForm } from './TodoForm';
import {Todo} from './Todo';

export const TodoList = () => {
    const [state, dispatch] = useReducer(reducerfcn, initialState)
    
    return (
        <div>
            <TodoForm dispatch = {dispatch} />
            {state.todos.map((item) => {
                return (
                    // <p key = {item.id}>{item.item}</p>
                    <Todo key = {item.id} dispatch={dispatch} todoAttr={item}/>
                )
            })}
        </div>
    )
}