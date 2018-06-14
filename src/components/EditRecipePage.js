/*
 * Renders the form to edit recipe.
*/

import React from 'react';
import RecipeForm from './RecipeForm';

const EditRecipePage = () => (
  <div>
    <h1>Edit recipe</h1>
    <RecipeForm />
    <button>Delete recipe</button>
  </div>
);

export default EditRecipePage;