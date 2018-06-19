/*
 * Renders each ingredient in the array.
*/

import React from 'react';

const ModalIngredient = (props) => (
  <div>
    <input type="checkbox" /> {props.ingredient}
  </div>
);

export default ModalIngredient;