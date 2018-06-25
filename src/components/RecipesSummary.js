/*
 * Renders the summary of recipes.
*/

import React from 'react';
import { connect } from 'react-redux';
import applyFilters from '../selectors/recipes';

const RecipesSummary = ({ totalRecipes, noOfFilteredRecipes }) => (
  <div>
    {
      totalRecipes === noOfFilteredRecipes ? <h1>Displaying all recipes</h1> :
      <h1>Dispalying {noOfFilteredRecipes} out of {totalRecipes} recipes.</h1>
    }
  </div>
);

const mapStateToProps = (state) => ({
  totalRecipes: state.recipes.length,
  noOfFilteredRecipes: applyFilters(state.recipes, state.filters).length
});

export default connect(mapStateToProps)(RecipesSummary);