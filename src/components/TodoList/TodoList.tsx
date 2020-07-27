import React from 'react'
import Todo from '../Todo';

import './TodoList.css'

interface TodoListProps {
    todos: Array<todo>;
    toggleTodo: toggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return (
        <ul className="todolist">
            {todos.map((todo, index)=>{
                return <Todo key={todo.text+index} todo={todo} toggleTodo={toggleTodo} />
            })}
        </ul>
    )
}

export default TodoList;