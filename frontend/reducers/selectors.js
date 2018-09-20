export const selectSearchedBusinessIds = results => {
  let resultArr = [];
  results.forEach( result => {
    resultArr.push(result.id);
  });
  return resultArr;
};


export const selectSearchBusinesses = (businesses, selectSearchedBusinessIds) => {

  let results = [];
  debugger
  businesses.forEach( business => {
    if (business.id && selectSearchedBusinessIds.includes(business.id.toString())){
      results.push(business);
    }
  });


  return results;
};
