import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function TodoList() {
  const [todos, settodos] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const data = await response.json();
      settodos(data);
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newTodo }),
    });
    const data = await response.json();
    settodos([...todos, data]);
    setnewTodo("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
      />
      <button onClick={addTodo}> Add </button>
    </div>
  );
}

export default TodoList;
