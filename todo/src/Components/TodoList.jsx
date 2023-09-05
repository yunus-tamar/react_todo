import React from 'react'

const TodoList = ({ Todos, SetTodos, SetEditTodo }) => {
  
  const HandleComplete = (todo) => {
    SetTodos(
      Todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    );
  };
  const HandleEdit = ({ id }) => {
    const findTodo = Todos.find((todo) => todo.id === id);
    SetEditTodo(findTodo);
  }
  const HandleDelete = ({ id }) => {
    SetTodos(Todos.filter((todo) => todo.id !== id))
  }
  return (
    <div>
      {
        Todos.map((todo) => (
          <li className='list-item' key={todo.id}>
            <input type="text"
              value={todo.title}
              className={`list ${todo.completed} ? "completed" : "" `}
              onChange={(event) => event.preventDefault()} />
            <div>
              <button className='button-complete task-button' onClick={() => HandleComplete(todo)}>
                <i className='fa fa-check-circle'></i>
              </button>
              <button className='button-edit task-button' onClick={() => HandleEdit(todo)}>
                <i className='fa fa-edit'></i>
              </button>
              <button className='button-delete task-button' onClick={() => HandleDelete(todo)}>
                <i className='fa fa-trash'></i>
              </button>
            </div>
          </li>
        ))
      }
    </div>
  )
}

export default TodoList
