/*
 * Renders each recipe item on the list. 
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';
import applyFilters from '../selectors/recipes';
import RecipeDisplayCard from './RecipeDisplayCard';

const RecipesList = (props) => (
  <div className="content-container">
    <div className="list-body">
      {props.recipes.map((recipe) => (
        <RecipeDisplayCard key={uuid()} recipe={recipe}/>
      ))}
      <Link className="card" to="/create">Add recipe</Link>
      {console.log(props.recipes)}
    </div>  
  </div>
);

const mapStateToProps = (state) => ({
  recipes: applyFilters(state.recipes, state.filters)
});

export default connect(mapStateToProps)(RecipesList);