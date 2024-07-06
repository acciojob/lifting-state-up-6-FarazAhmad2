import React, { useEffect } from 'react';

const TodoList = ({ todos, handleComplete }) => {
  useEffect(() => {
    console.log('TodoList rendered with todos:', todos);
  }, [todos]);

  return (
    <>
      <h2>Child Component</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
