/*
 * Renders ingredients on the add and edit recipe page.
*/

import React from 'react';

class Ingredient extends React.Component {
  onIngredientRemove = (e) => {
    e.preventDefault();

    this.props.onIngredientRemove(this.props.ingredient);
  }
  render() {
    return (
      <div>
        <p>{this.props.ingredient}</p>
        <button 
          onClick={this.onIngredientRemove}
        >
          Remove
        </button>
      </div>
    )
  }
};

export default Ingredient;