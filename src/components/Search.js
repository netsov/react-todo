import React from 'react';
import { connect } from 'react-redux';
import { search } from '../redux/actions';

const Search = ({ search }) => (
  <form>
    <label>
      Search
      <input type="text" onChange={e => search(e.target.value)} />
    </label>
  </form>
);

export default connect(({ search }) => ({ search }), { search })(Search);
