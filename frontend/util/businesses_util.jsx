

export const fetchBusinesses = (businesses) => {
  return $.ajax({
    method: 'GET',
    url: "api/businesses",
    data: { businesses }
  });
};


export const fetchBusiness = (id) => {
  return $.ajax({
    method: 'GET',
    url:  `api/businesses/${id}`
  });
};
