import * as BusinessCategoryAPIUtil from './../util/business_categories_util';

export const RECEIVE_ALL_BUSINESS_CATEGORIES = 'RECEIVE_ALL_BUSINESS_CATEGORIES';
export const RECEIVE_SELECTED_BUSINESS_CATEGORIES = 'RECEIVE_SELECTED_BUSINESS_CATEGORIES';


export const receiveAllBusinessCategories = businessCategories => {
  return {
    type: RECEIVE_ALL_BUSINESS_CATEGORIES,
    businessCategories
  };
};

export const requestAllBusinessCategories = () => {
  return dispatch => {
    return BusinessCategoryAPIUtil.fetchBusinessCategories().then( businessCategories => {
      return dispatch(receiveAllBusinessCategories(businessCategories));
    });
  };
};

export const receiveSelectedBusinessCategories = selectedBusinessCategories => {
  return {
    type: RECEIVE_SELECTED_BUSINESS_CATEGORIES,
    selectedBusinessCategories
  };
};
