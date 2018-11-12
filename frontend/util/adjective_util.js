export const fetchAdjective = query => {
  return $.ajax({
    method: "GET",
    url: `api/adjectives/adjective/?${query}`
  });
};

export const updateAdjective = query => {
  const querySplit = query.split("?");
  return $.ajax({
    method: "PATCH",
    url: `api/adjectives/${querySplit[0]}`,
    data: { query }
  });
};
