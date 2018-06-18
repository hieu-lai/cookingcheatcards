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
      <div>
        <h3>Ingredients</h3>
        {
          this.props.ingredients.map((ingredient) => (
            <Ingredient 
              key={uuid()}
              ingredient={ingredient} 
              onIngredientRemove={this.props.onIngredientRemove}
            />
          ))
        }
        <ListInputs onChange={this.props.onChange}/>
      </div>
    );
  };
};

export default IngredientsListForm;