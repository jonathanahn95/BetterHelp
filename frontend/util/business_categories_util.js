

export const fetchBusinessCategories = () => {
  return $.ajax({
    method: 'GET',
    url: "api/business_categories",
  });
};


export const fetchSelectedBusinessCategories = (businessCategory) => {
  return $.ajax({
    method: 'GET',
    url: `api/business_categories/${businessCategory}/businesses`,

  });
};
