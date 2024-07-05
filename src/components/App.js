// src/App.js
import { useState } from "react";
import React from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <h2 style={{ margin: "0 2rem" }}>Child Component</h2>

      <ul>
        {todos.map((todo) => (
          <TodoList key={todo.id} todo={todo} handleComplete={handleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default App;
