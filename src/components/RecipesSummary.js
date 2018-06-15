/*
 * Renders the summary of recipes.
*/

import React from 'react';
import { connect } from 'react-redux';
import applyFilters from '../selectors/recipes';

const RecipesSummary = ({ totalRecipes, noOfFilteredRecipes }) => (
  <div>
    <h1>Displaying {noOfFilteredRecipes} of {totalRecipes} recipies.</h1>
  </div>
);

const mapStateToProps = (state) => ({
  totalRecipes: state.recipes.length,
  noOfFilteredRecipes: applyFilters(state.recipes, state.filters).length
});

export default connect(mapStateToProps)(RecipesSummary);