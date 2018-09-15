export const fetchAllReviews = (businessId) => {
  return $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}/reviews`
  });
};


export const fetchReview = id => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`
  });
};

export const createReview = businessId => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/reviews`
  });
};

export const updateReview = id => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${id}`
  });
};

export const deleteReview = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  });
};
