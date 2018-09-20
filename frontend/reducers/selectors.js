export const selectSearchedBusinessIds = results => {
  let resultArr = [];
  results.forEach( result => {
    resultArr.push(result.id);
  });
  return resultArr;
};


export const selectSearchBusinesses = (businesses, selectSearchedBusinessIds) => {
  debugger
  let results = [];
  businesses.forEach( business => {
    if (selectSearchedBusinessIds.includes(business.id.toString())){
      results.push(business);
    }
  });

  debugger
  return results;
};
