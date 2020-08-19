import React from "react";

// components
import TodoItem from "./TodoItem";

const Todos = ({ todos, checkTodo }) => {
  return (
    <div className="todo-item-container">
      {todos.map((todo) => {
        return <TodoItem checkTodo={checkTodo} todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default Todos;
