// Get filtered recipes
const getVisibleRecipes = (recipes, { text, sortBy }) => {
  return recipes.filter((recipe) => {
    const textMatchIngredients = recipe.ingredients.toLowerCase().includes(text.toLowerCase());
    const textMatchTitle = recipe.title.toLowerCase().includes(text.toLowerCase());
    
    return textMatchIngredients || textMatchTitle; 
  }).sort((a, b) => {
    if (sortBy === 'alphabetic') {
      return a.title < b.title ? -1 : 1;
    } else if (sortBy === 'serves') {
      return a.serves - b.serves;
    } else {
      const totalTimeA = a.prepTime + a.cookTime;
      const totalTimeB = b.prepTime + b.cookTime;

      return totalTimeA - totalTimeB;
    }
  });
};

export default getVisibleRecipes;