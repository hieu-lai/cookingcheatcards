// SORT_BY_TIME
export const sortByTime = () => ({
  type: 'SORT_BY_TIME'
});

// SORT_BY_SERVES
export const sortByServes = () => ({
  type: 'SORT_BY_SERVES'
});

// SORT_BY_ALPHABET 
export const sortByAlphabet = () => ({
  type: 'SORT_BY_ALPHABET'
});

// SET_TEXT_FILTER
export const setTextFilter = (tect = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});