/*
 * Renders the dashboard
*/

import React from 'react';
import RecipesSummary from './RecipesSummary';
import RecipesFilters from './RecipesFilters';
import RecipesList from './RecipesList';

const DashboardPage = (props) => (
  <div>
    <RecipesSummary />
    <RecipesFilters />
    <RecipesList timestamp={new Date().toString()} />
  </div>
);

export default DashboardPage;
