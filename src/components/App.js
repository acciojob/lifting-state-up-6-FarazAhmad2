import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  // useEffect to log todos state change
  useEffect(() => {
    console.log('Todos state changed:', todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
