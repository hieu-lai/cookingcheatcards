/*
 * Display each recipe as a card
*/

import React from 'react';
import { Link } from 'react-router-dom';

const RecipeDisplayCard = ({ recipe }) => (
  <div>
    <h3>{recipe.title}</h3>
    <h5>Prep</h5>
    {recipe.prepTime}
    <h5>Cook</h5>
    {recipe.cookTime}
    <h5>Serves</h5>
    {recipe.serves}
    <button>View</button>
    <Link to={`/edit/${recipe.id}`}>Edit</Link>
  </div>
);

export default RecipeDisplayCard;