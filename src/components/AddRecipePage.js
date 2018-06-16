/*
 * Renders add recipe page with form.
*/

import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipes';

class AddRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.addRecipe(recipe);
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
  addRecipe: (recipe) => dispatach(addRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddRecipePage);