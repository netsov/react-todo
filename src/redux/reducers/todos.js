import uuid from 'uuid/v4';

import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initial = [
  { text: 'foo', completed: false, id: uuid() },
  { text: 'bar', completed: true, id: uuid() },
  { text: 'zoo', completed: false, id: uuid() }
];

export const todos = (state = initial, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: uuid(), completed: false }];
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.todoId
            ? { ...todo, completed: !todo.completed }
            : todo
      );
    default:
      return state;
  }
};
