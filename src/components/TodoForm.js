import React from 'react';
import { Consumer } from '../context';

export class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e, state) {
    e.preventDefault();
    state.createToDo(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <Consumer>
        {state => (
          <form onSubmit={e => this.handleSubmit(e, state)}>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleInput}
            />
            <button type="submit" disabled={!this.state.input}>
              Create ToDo
            </button>
          </form>
        )}
      </Consumer>
    );
  }
}
