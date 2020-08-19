import React, { useState } from "react";

const TodoItem = ({ checkTodo, todo }) => {
  const [completedTodo, setCompletedTodo] = useState(todo.completed);

  const completedStyle = {
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <span style={completedTodo ? completedStyle : null}>{todo.title}</span>
      <label className="todo-label">
        <input
          className="todo-check"
          type="checkbox"
          checked={completedTodo}
          onChange={(e) => {
            setCompletedTodo(checkTodo(todo));
          }}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default TodoItem;
