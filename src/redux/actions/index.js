import { ADD_TODO, SEARCH, TOGGLE_TODO } from '../actionTypes';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function toggleTodo(todoId) {
  return {
    type: TOGGLE_TODO,
    todoId
  };
}

export function search(search) {
  return {
    type: SEARCH,
    search
  };
}
