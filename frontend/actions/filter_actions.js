export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';


export const updateFilter = (filter , value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
