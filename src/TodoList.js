import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
    </div>
  );
}

export default TodoList;
