/*
 * Renders form for create/edit recipes.
*/

import React from 'react';
import IngredientsListForm from './IngredientsListForm';
import MethodListForm from './MethodListForm';

class RecipeForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h5>Recipe Title</h5>
          <input />
          <h5>Prep Time</h5>
          <input />
          <h5>Cook Time</h5>
          <input />
          <h5>Serves</h5>
          <input />
          <IngredientsListForm />
          <MethodListForm />
          <button>Save recipe</button>
        </form>
      </div>
    );
  };
};

export default RecipeForm;