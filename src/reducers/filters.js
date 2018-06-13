// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'alphabetic'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_TIME':
      return {
        ...state,
        sortBy: 'time'
      };
    case 'SORT_BY_SERVES':
      return {
        ...state,
        sortBy: 'serves'
      };
    case 'SORT_BY_ALPHABET':
      return {
        ...state,
        sortBy: 'alphabetic'
      };
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };      
    default:
      return state;
  }
} 

export default filtersReducer;