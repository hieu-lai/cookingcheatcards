/*
 * Renders the form to edit recipe.
*/

import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { startEditRecipe, startRemoveRecipe } from '../actions/recipes';

class EditRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.startEditRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');
  };
  
  onRemoveRecipe = () => {
    const id = this.props.recipe.id;
    this.props.startRemoveRecipe({ id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Edit recipe</h1>
        <RecipeForm 
          recipe={this.props.recipe}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemoveRecipe}>Delete recipe</button>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditRecipe: (id, recipe) => dispatch(startEditRecipe(id, recipe)),
  startRemoveRecipe: ({ id }) => dispatch(startRemoveRecipe({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipePage);