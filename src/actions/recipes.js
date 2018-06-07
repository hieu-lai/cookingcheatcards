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