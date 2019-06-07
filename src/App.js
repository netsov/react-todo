import React from 'react';
import './App.css';
import { ToDos } from './components/Todos';
import { ToDoForm } from './components/TodoForm';
import { SearchForm } from './components/SearchForm';
import { Provider } from './context';

class App extends React.Component {
  state = {
    todos: [
      { text: 'foo', completed: false },
      { text: 'bar', completed: true },
      { text: 'zoo', completed: false }
    ],
    search: ''
  };

  constructor(props) {
    super(props);
    this.createToDo = this.createToDo.bind(this);
    this.toggleToDo = this.toggleToDo.bind(this);
    this.search = this.search.bind(this);
  }

  createToDo(text) {
    this.setState(state => ({ todos: [...state.todos, { text }] }));
  }

  toggleToDo(text) {
    this.setState(state => ({
      todos: state.todos.map(
        todo =>
          todo.text === text ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  }

  get todos() {
    return this.state.search
      ? this.state.todos.filter(
          todo =>
            todo.text.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
            -1
        )
      : this.state.todos;
  }

  search(search) {
    this.setState({ search });
  }

  render() {
    return (
      <main>
        <Provider
          value={{
            createToDo: this.createToDo,
            toggleToDo: this.toggleToDo,
            search: this.search
          }}
        >
          <SearchForm />
          <ToDoForm />
          <ToDos todos={this.todos} />
        </Provider>
      </main>
    );
  }
}

export default App;
