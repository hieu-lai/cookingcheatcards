import database from '../firebase/firebase';

// SET_RECIPES
export const setRecipes = (recipes) => ({
  type: 'SET_RECIPES',
  recipes
});

export const startSetRecipes = () => {
  return (dispatch, getState) => {
    return database.ref('recipes')
      .once('value')
      .then((snapshot) => {
        const recipes = [];

        snapshot.forEach((childSnapshot) => {
          recipes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setRecipes(recipes));
      });
  };
};

// ADD_RECIPE
export const addRecipe = (
  {
    prepTime = 0,
    cookTime = 0,
    serves = 0,
    ingredients = [],
    method = {}
  } = {} 
) => ({
  type: 'ADD_RECIPE',
  recipe: {
    id: uuid(),
    prepTime,
    cookTime,
    serves,
    ingredients,
    method
  }
});

// REMOVE_RECIPE
export const removeRecipe = ({ id } = {}) => ({
  type: 'REMOVE_RECIPE',
  id
});

// EDIT_RECIPE
export const editRecipe = (id, updates) => ({
  type: 'EDIT_RECIPE',
  id,
  updates
});