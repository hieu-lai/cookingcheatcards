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
    this.props.history.push('/dashboard');
  };
  
  onRemoveRecipe = () => {
    const id = this.props.recipe.id;
    this.props.startRemoveRecipe({ id });
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>  
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit recipe</h1>
          </div>
        </div>  
        <div className="content-container">  
          <RecipeForm 
            recipe={this.props.recipe}
            onSubmit={this.onSubmit}
          />
        </div>
        <div className="content-container">  
          <button className="button button--action button--delete" onClick={this.onRemoveRecipe}>Delete recipe</button>
        </div>
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