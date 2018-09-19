

export const fetchBusinesses = () => {
  return $.ajax({
    method: 'GET',
    url: "api/businesses",
  });
};


export const fetchBusiness = (id) => {
  return $.ajax({
    method: 'GET',
    url:  `api/businesses/${id}`
  });
};
