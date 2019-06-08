import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

export class AddTodo extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <button type="submit" disabled={!this.state.input}>
          Add ToDo
        </button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
