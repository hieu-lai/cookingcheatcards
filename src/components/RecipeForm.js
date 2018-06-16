/*
 * Renders form for create/edit recipes.
*/

import React from 'react';
import IngredientsListForm from './IngredientsListForm';
import MethodListForm from './MethodListForm';

class RecipeForm extends React.Component {
  state = {
    title: '',
    prepTime: 0,
    cookTime: 0,
    serves: 0,
    ingredients: [],
    method: []
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onPrepTimeChange = (e) => {
    const prepTime = e.target.value;
    if (!prepTime || prepTime.match(/^([+-]?[1-9]\d*|0)$/)) {
      this.setState(() => ({ prepTime }));
    }
  };

  onCookTimeChange = (e) => {
    const cookTime = e.target.value;
    if (!cookTime || cookTime.match(/^([+-]?[1-9]\d*|0)$/)) {
      this.setState(() => ({ cookTime }));
    }
  };

  onServesChange = (e) => {
    const serves = e.target.value;
    if (!serves || serves.match(/^([+-]?[1-9]\d*|0)$/)) {
      this.setState(() => ({ serves }));
    }
  };

  onIngredientChange = (data) => {
    this.setState((prevState) => ({ 
      ingredients: prevState.ingredients.concat([data])
    }));
  };

  onIngredientRemove = (removeIngredient) => {
    this.setState((prevState) => ({
      ingredients: prevState.ingredients.filter((ingredient) => removeIngredient !== ingredient)
    }));
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    
    this.props.onSubmit({
      title: this.state.title,
      prepTime: this.state.prepTime,
      cookTime: this.state.cookTime,
      serves: this.state.serves,
      ingredients: this.state.ingredients,
      method: this.state.method
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h5>Recipe Title</h5>
          <input 
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <h5>Prep Time</h5>
          <input 
            value={this.state.prepTime}
            onChange={this.onPrepTimeChange}
          />
          <h5>Cook Time</h5>
          <input 
            value={this.state.cookTime}
            onChange={this.onCookTimeChange}
          />
          <h5>Serves</h5>
          <input 
            value={this.state.serves}
            onChange={this.onServesChange}
          />
          <IngredientsListForm 
            ingredients={this.state.ingredients}
            onChange={this.onIngredientChange}
            onIngredientRemove={this.onIngredientRemove}
          />
          <MethodListForm />
          <button>Save recipe</button>
        </form>
      </div>
    );
  };
};

export default RecipeForm;