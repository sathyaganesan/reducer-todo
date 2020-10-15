import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './Components/TodoList';

function App() {

  // const [todoItem, dispatch] = useReducer(reducerfcn, []);
  // const [todoList, setTodoList] = useState("");

  // const changeHandler = (e) => { 
  //   setTodoList(e.target.value);
  // } 

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch({type: ACTIONS.ADDTODO});
  //   setTodoList('');
  // }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      {/* <form onSubmit = {handleSubmit}>
        <input type="text" onChange={changeHandler} value={todoList}/>
        <button>Completed</button>
        <button>Clear Todo</button>
      </form> */}
    </div>
  )
}

export default App;
