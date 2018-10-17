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


export const removeReview = review => {
  return {
    type: REMOVE_REVIEW,
    review
  };
};



export const fetchAllReviews = businessId => {
  return dispatch => {
    return ReviewApiUtil.fetchAllReviews(businessId).then( reviews => {
      return dispatch(receiveAllReviews(reviews));
    });
  };
};

export const fetchAllUnrelatedReviews = () => {
  return dispatch => {
    return ReviewApiUtil.fetchAllUnrelatedReviews().then( reviews => {
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
  return dispatch => {
    return ReviewApiUtil.createReview(business).then( review => {
      return dispatch(receiveReview(review));
    }, errors => {
      return dispatch(receiveReviewErrors(errors.responseJSON));
    });
  };
};

export const updateReview = review => {
  return dispatch => {
    return ReviewApiUtil.updateReview(review).then( review => {
      return dispatch(receiveReview(review));
    }, errors => {
      return dispatch(receiveReviewErrors(errors.responseJSON));
    });
  };
};

export const deleteReview = review => {
  return dispatch => {
    return ReviewApiUtil.deleteReview(review).then( review => {
      return dispatch(removeReview(review));
    });
  };
};
