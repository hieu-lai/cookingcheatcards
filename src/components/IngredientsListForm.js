/*
 * Renders ingredients list inputs
*/ 

import React from 'react';
import uuid from 'uuid';
import ListInputs from './ListInputs'; 
import Ingredient from './Ingredient';


class IngredientsListForm extends React.Component {
  render() {
    return (
      <div className="ingredients-container">
        <h3>Ingredients</h3>
        {this.props.hasIngredients === 0 && <p className="form__error">Please provide at least one ingredient.</p>}
        {
          this.props.ingredients.map((ingredient) => (
            <Ingredient 
              key={uuid()}
              ingredient={ingredient} 
              onIngredientRemove={this.props.onIngredientRemove}
            />
          ))
        }
        <ListInputs 
          placeholder="Add ingredient here!"
          onChange={this.props.onChange}
        />
      </div>
    );
  };
};

export default IngredientsListForm;