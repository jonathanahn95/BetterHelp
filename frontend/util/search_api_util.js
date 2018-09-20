export const searchBusinesses = (searchData) => {

  return $.ajax({
    method: 'GET',
    url: `api/businesses/search/?search=${searchData}`,
  });
};
