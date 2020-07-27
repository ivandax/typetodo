import React, { useState } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {

  //const [todos, setTodos] = useState([{text: "hello", complete: true}]);
  const [todos, setTodos] = useState<todo[]>([]);

  const toggleTodo : toggleTodo = (selectedTodo) => {
    if(todos.length){
      const newTodos = todos.map( todo => {
        if(todo.text === selectedTodo.text){
          return {
            text: todo.text,
            complete: !todo.complete
          }
        }
        return todo;
      })
      setTodos(newTodos);
    }
  }

  const addTodo : AddTodo = (newTodo) => {
    newTodo.trim() !== '' && setTodos([...todos, {text: newTodo, complete: false}])
  }

  return (
    <div className="App">
      <h3>Simple Typescript TodoList</h3>
      {todos.length ? <TodoList todos={todos} toggleTodo={toggleTodo}/> : <></>}
      <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
