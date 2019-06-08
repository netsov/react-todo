import React from 'react';

import { connect } from 'react-redux';

import { ToDo } from './Todo';
import { toggleTodo } from '../redux/actions';

export const ToDos = ({ todos = [], toggleToDo }) => {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map(todo => (
          <ToDo key={todo.id} todo={todo} toggleToDo={toggleToDo} />
        ))
      ) : (
        <p>No todos</p>
      )}
    </ul>
  );
};

function mapStateToProps({ todos, search }) {
  return {
    todos: search
      ? todos.filter(
          todo => todo.text.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
      : todos
  };
}

export default connect(mapStateToProps, { toggleToDo: toggleTodo })(ToDos);
