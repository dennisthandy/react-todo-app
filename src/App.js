import React, { useState } from "react";
import "./styles.css";

// components
import Todos from "./components/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("");

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
  };

  const checkCompletedTodo = () => todos.some((todo) => todo.completed);

  const filteredTodos = () => {
    let filtered = [];

    if (filter === "completed" && checkCompletedTodo()) {
      filtered = todos.filter((todo) => todo.completed);
    } else if (filter === "ongoing") {
      filtered = todos.filter((todo) => !todo.completed);
    } else {
      filtered = todos;
    }
    return filtered;
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo-container">
        <Todos todos={filteredTodos()} checkTodo={checkTodo} />
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
          <button
            className={`button-filter ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Show All Todo
          </button>
          <button
            className={`button-filter ${
              filter === "completed" && checkCompletedTodo() ? "active" : ""
            }`}
            onClick={() => setFilter("completed")}
          >
            Show Completed Todo
          </button>
          <button
            className={`button-filter ${filter === "ongoing" ? "active" : ""}`}
            onClick={() => setFilter("ongoing")}
          >
            Show Ongoing Todo
          </button>
        </div>
      </div>
      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Dennis Thandy
        </p>
      </footer>
    </div>
  );
}
