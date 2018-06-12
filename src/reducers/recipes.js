// Recipes Reducer
const recipesReducerDefaultState = [];

const recipesReducer = (state = recipesReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_RECIPES':
      return action.recipes;
    case 'ADD_RECIPE':
      return [
        ...state,
        action.recipe
      ];
    case 'REMOVE_RECIPE':
      return state.filter((recipe) => recipe.id !== action.id);
    case 'EDIT_RECIPE':
      return state.map((recipe) => { 
        if (recipe.id === action.id) {
          return {
            ...recipe,
            ...action.updates
          };
        } else {
          return recipe;
        }
      });        
    default:
      return state;
  }
};

export default recipesReducer;