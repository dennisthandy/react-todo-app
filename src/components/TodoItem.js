import React, { useState } from "react";

const TodoItem = ({ checkTodo, todo }) => {
  const [completedTodo, setCompletedTodo] = useState(todo.completed);

  const completedStyle = {
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <span style={completedTodo ? completedStyle : null}>{todo.title}</span>
      <input
        type="checkbox"
        checked={completedTodo}
        onChange={(e) => {
          setCompletedTodo(checkTodo(todo));
        }}
      />
    </div>
  );
};

export default TodoItem;
