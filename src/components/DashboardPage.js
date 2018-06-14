/*
 * Renders the dashboard
*/

import React from 'react';
import RecipeSummary from './RecipeSummary';
import RecipeFilters from './RecipeFilters';
import RecipesList from './RecipesList';

const DashboardPage = () => (
  <div>
    <RecipeSummary />
    <RecipeFilters />
    <RecipesList />
  </div>
);

export default DashboardPage;
