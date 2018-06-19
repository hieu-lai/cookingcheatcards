/*
 * Renders form for create/edit recipes.
*/

import React from 'react';
import IngredientsListForm from './IngredientsListForm';
import MethodListForm from './MethodListForm';

class RecipeForm extends React.Component {  
  state = {
    title: this.props.recipe ? this.props.recipe.title : '',
    prepTime: this.props.recipe ? this.props.recipe.prepTime : '',
    cookTime: this.props.recipe ? this.props.recipe.cookTime : '',
    serves: this.props.recipe ? this.props.recipe.serves : '',
    ingredients: this.props.recipe ? this.props.recipe.ingredients : [],
    method: this.props.recipe ? this.props.recipe.method : []
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

  onMethodAdd = (data) => {
    this.setState((prevState) => ({ 
      method: prevState.method.concat([data])
    }));
  };

  onMethodToRemove = (methodToRemove) => {
    this.setState((prevState) => ({
      method: prevState.method.filter((step) => methodToRemove !== step)
    }));
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    
    if (this.state.ingredients.length !== 0 && this.state.method.length !== 0) {
      this.props.onSubmit({
        title: this.state.title,
        prepTime: this.state.prepTime,
        cookTime: this.state.cookTime,
        serves: this.state.serves,
        ingredients: this.state.ingredients,
        method: this.state.method
      });
    }
  };

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
        </form>  
          <IngredientsListForm 
            ingredients={this.state.ingredients}
            hasIngredients={this.state.ingredients.length}
            onChange={this.onIngredientChange}
            onIngredientRemove={this.onIngredientRemove}
          />
          <MethodListForm 
            method={this.state.method}
            hasMethod={this.state.method.length}
            onMethodAdd={this.onMethodAdd}
            onMethodToRemove={this.onMethodToRemove}
          />
          <button onClick={this.onSubmit}>Save recipe</button>
        
      </div>
    );
  };
};

export default RecipeForm;