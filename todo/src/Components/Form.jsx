import React, { useEffect } from 'react';
import { v4 as uuidV4 } from "uuid";
const Form = ({ input, SetInput, Todos, SetTodos, EditTodo, SetEditTodo }) => {
    useEffect(() => {
        if (EditTodo) {
            SetInput(EditTodo.title);
        } else {
            SetInput("");
        }
    }, [SetInput, EditTodo]);
    const onInputChange = (event) => {
        SetInput(event.target.value);
    }

    const UpdateTodo = (title, id, completed) => {
        const newTodo = Todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        )
        SetTodos(newTodo);
        SetEditTodo(" ");
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!EditTodo) {
            SetTodos([...Todos, { id: uuidV4(), title: input, completed: false }]);
            SetInput("");
        } else {
            UpdateTodo(input, EditTodo.id, EditTodo.completed);
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder='Enter a Todo' className='task-input' value={input} required onChange={onInputChange} />
            <button className='button-add' type='submit'>
                { /* {EditTodo ? "ok" : "Add"} */}
                add
            </button>
        </form>
    )
}

export default Form;
