export const fetchLike = like => {
  debugger;
  return $.ajax({
    method: "GET",
    url: `api/adjectives/like/${like.review_id}`,
    data: { like }
  });
};
export const fetchCool = cool => {
  return $.ajax({
    method: "GET",
    url: `api/adjectives/cool/${cool.review_id}`,
    data: { cool }
  });
};
export const fetchFunny = funny => {
  return $.ajax({
    method: "GET",
    url: `api/adjectives/funny/${funny.review_id}`,
    data: { funny }
  });
};
export const fetchUseful = useful => {
  return $.ajax({
    method: "GET",
    url: `api/adjectives/useful/${useful.review_id}`,
    data: { useful }
  });
};
export const createLike = like => {
  return $.ajax({
    method: "POST",
    url: `api/adjectives/likes/`,
    data: { like }
  });
};
export const deleteLike = like => {
  return $.ajax({
    method: "DELETE",
    url: `api/adjectives/likes/${like.review_id}`,
    data: { like }
  });
};
export const updateCool = cool => {
  return $.ajax({
    method: "PATCH",
    url: `api/adjectives/cool/`,
    data: { cool }
  });
};
export const updateUseful = useful => {
  debugger;
  return $.ajax({
    method: "PATCH",
    url: `api/adjectives/useful/`,
    data: { useful }
  });
};
export const updateFunny = funny => {
  return $.ajax({
    method: "PATCH",
    url: `api/adjectives/funny/`,
    data: { funny }
  });
};
