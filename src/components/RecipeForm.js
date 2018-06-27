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
    method: this.props.recipe ? this.props.recipe.method : [],
    error: ''
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
    
    if (
      this.state.ingredients.length !== 0 && 
      this.state.method.length !== 0 &&
      this.state.title &&
      this.state.prepTime &&
      this.state.cookTime &&
      this.state.serves
    ) {
      this.setState(() => ({ error: '' }));
      const modTitle = this.state.title.replace(/\b[a-z]/g, (match) => match.toUpperCase());
      this.props.onSubmit({
        title: modTitle,
        prepTime: this.state.prepTime,
        cookTime: this.state.cookTime,
        serves: this.state.serves,
        ingredients: this.state.ingredients,
        method: this.state.method
      });
    } else {
      this.setState(() => ({ error: 'Please complete all fields.'}))
    }
  };

  render() {
    return (
      <div>
        <form className="form form--half-size" onSubmit={this.onSubmit}>
          <h5 className="form__input-info">Recipe Title</h5>
          <input
            className="text-input" 
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <div className="form-info">
            <div className="form-info__item">
              <h5 className="form__input-info">Prep Time</h5>
              <input 
                className="text-input text-input--stretch"
                placeholder="mins"
                value={this.state.prepTime}
                onChange={this.onPrepTimeChange}
              />
            </div>
            <div className="form-info__item">
              <h5 className="form__input-info">Cook Time</h5>
              <input 
                className="text-input text-input--stretch"
                placeholder="mins"
                value={this.state.cookTime}
                onChange={this.onCookTimeChange}
              />
            </div>
            <div className="form-info__item">
              <h5 className="form__input-info">Serves</h5>
              <input 
                className="text-input text-input--stretch"
                value={this.state.serves}
                onChange={this.onServesChange}
              />
            </div>
          </div>
        </form>
        <div className="content-flex-container">  
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
        </div> 
        {this.state.error && <p className="box-layout__error">{this.state.error}</p>}
        <button className="button button--action button--blue" onClick={this.onSubmit}>Save recipe</button>
        
      </div>
    );
  };
};

export default RecipeForm;