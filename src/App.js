import React from 'react';
import './App.css';
import ToDos from './components/Todos';
import AddTodo from './components/AddTodo';
import Search from './components/Search';

import { Provider } from 'react-redux';
import { store } from './redux/store';

export default () => (
  <main>
    <h4>Todo List</h4>
    <Provider store={store}>
      <Search />
      <AddTodo />
      <ToDos />
    </Provider>
  </main>
);
