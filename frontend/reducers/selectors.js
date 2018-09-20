export const selectSearchedBusinessIds = results => {
  let resultArr = [];
  results.forEach( result => {
    resultArr.push(result.id);
  });
  return resultArr;
};


export const selectSearchBusinesses = (businesses, selectSearchedBusinessIds) => {

  let results = [];
  
  businesses.forEach( business => {
    if (selectSearchedBusinessIds && business.id && selectSearchedBusinessIds.includes(business.id.toString())){
      results.push(business);
    }
  });


  return results;
};
