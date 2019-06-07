import React from 'react';
import { Consumer } from '../context';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {}

  render() {
    return (
      <form>
        <Consumer>
          {state => (
            <label>
              Search{' '}
              <input type="text" onChange={e => state.search(e.target.value)} />
            </label>
          )}
        </Consumer>
      </form>
    );
  }
}
