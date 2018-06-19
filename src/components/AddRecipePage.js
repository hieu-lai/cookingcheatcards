/*
 * Renders add recipe page with form.
*/

import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { startAddRecipe } from '../actions/recipes';

class AddRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.startAddRecipe(recipe);
    this.props.history.push('/');
  };
  render() {
    return (
        <div>
          <h1>Add recipe</h1>
          <RecipeForm onSubmit={this.onSubmit} />
        </div>
    );
  };
};

const mapDispatchToProps = (dispatach) => ({
  startAddRecipe: (recipe) => dispatach(startAddRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddRecipePage);