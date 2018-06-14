/*
 * Renders each recipe item on the list. 
*/

import React from 'react';
import { Link } from 'react-router-dom';

const RecipesList = () => (
  <div>
    This is the list of recipes.
    <Link to="/create">Add recipe</Link>
  </div>
);

export default RecipesList;