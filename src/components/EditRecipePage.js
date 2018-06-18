/*
 * Renders the form to edit recipe.
*/

import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe, removeRecipe } from '../actions/recipes';

class EditRecipePage extends React.Component {
  onSubmit = (recipe) => {
    this.props.editRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');
  };
  
  onRemoveRecipe = () => {
    const id = this.props.recipe.id;
    this.props.removeRecipe({ id });
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
  editRecipe: (id, recipe) => dispatch(editRecipe(id, recipe)),
  removeRecipe: ({ id }) => dispatch(removeRecipe({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipePage);