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
    this.props.history.push('/dashboard');
  };

  componentDidMount () {
    window.scrollTo(0, 0);
  };
  
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add recipe</h1>
          </div>
        </div>  
        <div className="content-container">
          <RecipeForm onSubmit={this.onSubmit} />
        </div>
      </div>  
    );
  };
};

const mapDispatchToProps = (dispatach) => ({
  startAddRecipe: (recipe) => dispatach(startAddRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddRecipePage);