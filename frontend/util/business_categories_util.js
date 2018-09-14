

export const fetchBusinessCategories = () => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: "api/business_categories",
  });
};


export const fetchSelectedBusinessCategories = (businessCategory) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `api/business_categories/${businessCategory}/businesses`
  });
};
