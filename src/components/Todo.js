import React from 'react';

export const ToDo = ({ todo, toggleToDo }) => {
  return (
    <li>
      <label htmlFor={todo.text}>
        <input
          id={todo.text}
          type="checkbox"
          checked={!!todo.completed}
          onChange={() => toggleToDo(todo.text)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {todo.text}
        </span>
      </label>
    </li>
  );
};
