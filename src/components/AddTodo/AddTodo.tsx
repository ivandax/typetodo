import React, { useState, ChangeEvent } from 'react';

import './AddTodo.css';

interface AddTodoProps {
    addTodo: AddTodo;
}

const AddTodo: React.FC<AddTodoProps> = ({addTodo}) => {

    const [text, setText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <form className="addTodo" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={text}/>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;