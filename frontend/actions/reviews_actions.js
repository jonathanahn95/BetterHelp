import * as ReviewApiUtil from './../util/reviews_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";


export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const receiveAllReviews = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  };
};

export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};


export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  };
};

export const fetchAllReviews = businessId => {
  return dispatch => {
    return ReviewApiUtil.fetchAllReviews(businessId).then( reviews => {
      return dispatch(receiveAllReviews(reviews));
    });
  };
};

export const fetchReview = id => {
  return dispatch => {
    return ReviewApiUtil.fetchReview(id).then( review => {
      return dispatch(receiveReview(review));
    });
  };
};

export const createReview = business => {
  debugger
  return dispatch => {
    return ReviewApiUtil.createReview(business.businessId).then( review => {
      return dispatch(receiveReview(review));
    }, errors => {
      return dispatch(receiveReviewErrors(errors.responseJSON));
    });
  };
};

export const updateReview = id => {
  return dispatch => {
    return ReviewApiUtil.updateReview(id).then( review => {
      return dispatch(receiveReview(review));
    }, errors => {
      return dispatch(receiveReviewErrors(errors.responseJSON));
    });
  };
};

export const deleteReview = id => {
  return dispatch => {
    return ReviewApiUtil.deleteReview(id).then( review => {
      return dispatch(removeReview(review));
    });
  };
};
