import React, { useState } from "react";
import "./styles.css";

// components
import Todos from "./components/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: todos.length,
      title: todo,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const checkTodo = (todo) => {
    return (todo.completed = !todo.completed);
  };

  const clearCompletedTodo = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo-container">
        <Todos todos={todos} checkTodo={checkTodo} />
        <input
          className="todo-input"
          placeholder="Add Todo"
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && todo !== "") {
              addTodo();
              setTodo("");
            }
          }}
        />
        <div className="button-container">
          <button className="button-clear" onClick={clearCompletedTodo}>
            Clear Completed Todo
          </button>
        </div>
      </div>
    </div>
  );
}
