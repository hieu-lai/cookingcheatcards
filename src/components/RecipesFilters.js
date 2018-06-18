/*
 * Renders the toolbar of filters. 
*/

import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAlphabet, sortByTime, sortByServes } from '../actions/filters';

class RecipesFilters extends React.Component {
  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }));
    this.props.setTextFilter(text);
  };
  onSelectChange = (e) => {
    const sortBy = e.target.value;
    if (sortBy === 'alphabetical') {
      this.props.sortByAlphabet();
    } else if (sortBy === 'totalTime') {
      this.props.sortByTime();
    } else {
      this.props.sortByServes();
    }
  };
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select onChange={this.onSelectChange}>
          <option value="alphabetical">Alphabetical A-Z</option>
          <option value="totalTime">Total time (acending)</option>
          <option value="noOfPeople">No. of people (acending)</option>
        </select>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAlphabet: () => dispatch(sortByAlphabet()),
  sortByTime: () => dispatch(sortByTime()),
  sortByServes: () => dispatch(sortByServes())
});

export default connect(mapStateToProps,mapDispatchToProps)(RecipesFilters);