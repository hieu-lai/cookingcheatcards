/*
 * Renders the summary of recipes.
*/

import React from 'react';
import { connect } from 'react-redux';
import applyFilters from '../selectors/recipes';

const RecipesSummary = ({ totalRecipes, noOfFilteredRecipes }) => (
  <div className="page-header">
    <div className="content-container">
      {
        totalRecipes === noOfFilteredRecipes ? <h1 className="page-header__title">Displaying all recipes</h1> :
        <h1 className="page-header__title">Dispalying {noOfFilteredRecipes} out of {totalRecipes} recipes.</h1>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  totalRecipes: state.recipes.length,
  noOfFilteredRecipes: applyFilters(state.recipes, state.filters).length
});

export default connect(mapStateToProps)(RecipesSummary);