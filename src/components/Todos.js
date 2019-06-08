import React, { Fragment } from 'react';
import { ToDo } from './Todo';
import { Consumer } from '../context';

export const ToDos = ({ todos = [] }) => {
  return (
    <ul>
      <Consumer>
        {state => (
          <Fragment>
            {todos.map(todo => (
              <ToDo key={todo.id} todo={todo} toggleToDo={state.toggleToDo} />
            ))}
          </Fragment>
        )}
      </Consumer>
    </ul>
  );
};
