import React from "react";

function TodoList({ todo, handleComplete }) {
  return (
    <div>
        <li>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
    </div>
  );
}

export default TodoList;
