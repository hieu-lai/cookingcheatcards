import database from '../firebase/firebase';
import uuid from 'uuid';

// SET_RECIPES
export const setRecipes = (recipes) => ({
  type: 'SET_RECIPES',
  recipes
});

export const startSetRecipes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/recipes`)
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
export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
});

export const startAddRecipe = (recipeData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      prepTime = 0,
      cookTime = 0,
      serves = 0,
      ingredients = [],
      method = []
    } = recipeData;
    const recipe = { title, prepTime, cookTime, serves, ingredients, method };

    return database.ref(`users/${uid}/recipes`).push(recipe).then((ref) => {
      dispatch(addRecipe({
        id: ref.key,
        ...recipe
      }));
    });
  };
};

// REMOVE_RECIPE
export const removeRecipe = ({ id } = {}) => ({
  type: 'REMOVE_RECIPE',
  id
});

export const startRemoveRecipe = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/recipes/${id}`).remove().then(() => {
      dispatch(removeRecipe({ id }));
    });
  };
};

// EDIT_RECIPE
export const editRecipe = (id, updates) => ({
  type: 'EDIT_RECIPE',
  id,
  updates
});

export const startEditRecipe = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/recipes/${id}`).update(updates).then(() => {
      dispatch(editRecipe(id, updates));
    });
  };
};