import React from 'react';

export const ToDo = ({ todo, toggleToDo }) => {
  return (
    <li>
      <label htmlFor={todo.id}>
        <input
          id={todo.id}
          type="checkbox"
          checked={!!todo.completed}
          onChange={() => toggleToDo(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {todo.text}
        </span>
      </label>
    </li>
  );
};
