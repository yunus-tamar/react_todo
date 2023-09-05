import React, { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./App.css";
const App = () => {

  // commented code for store in local storage 
  // const initialState = JSON.parse(localStorage.getItem('Todos')) || [];
  
  const [input, SetInput] = useState("");
  const [Todos, SetTodos] = useState([]);
  const [EditTodo, SetEditTodo] = useState(null);

  // useEffect(()=>{
  //   localStorage.setItem("Toods", JSON.stringify(Todos));
  // },[Todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            SetInput={SetInput}
            Todos={Todos}
            SetTodos={SetTodos}
            EditTodo={EditTodo}
            SetEditTodo={SetEditTodo}
          />
        </div>
        <div>
          <TodoList
            Todos={Todos}
            SetTodos={SetTodos}
            SetEditTodo={SetEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
