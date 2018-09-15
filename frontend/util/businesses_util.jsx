

export const fetchBusinesses = () => {
  return $.ajax({
    method: 'GET',
    url: "api/businesses",
  });
};

export const fetchBusiness = (id) => {
  debugger
  return $.ajax({
    method: 'GET',
    url:  `api/businesses/${id}`
  });
};
