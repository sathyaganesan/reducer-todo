import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './Components/TodoList';

function App() {

  return (
    <div className = "app-div">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  )
}

export default App;
