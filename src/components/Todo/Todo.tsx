import React from 'react';

import './Todo.css';

interface TodoProps {
    todo: todo //todo is defined on the types.d.ts file. Hover and go to definition to see.
    toggleTodo: toggleTodo;
}

const Todo: React.FC<TodoProps> = ( {todo, toggleTodo} ) =>{
    return <li>
        <label className={todo.complete ? 'complete' : undefined}>
            <input 
            type="checkbox" 
            checked={todo.complete}
            onChange={()=>toggleTodo(todo)}
            />
            {todo.text}
        </label>
        </li>
}

export default Todo;
