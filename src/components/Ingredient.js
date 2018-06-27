/*
 * Renders ingredients on the add and edit recipe page.
*/

import React from 'react'; 
import RemoveIcon from 'react-icons/lib/fa/minus-circle';

class Ingredient extends React.Component {
  onIngredientRemove = () => {
    this.props.onIngredientRemove(this.props.ingredient);
  };
  render() {
    return (
        <div className="ingredient">
          <p className="ingredient__name">&bull;&nbsp; {this.props.ingredient}</p>
          <RemoveIcon className="icon-remove" onClick={this.onIngredientRemove} />
        </div>
    );
  };
};

export default Ingredient;