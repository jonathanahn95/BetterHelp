import * as BusinessesApiUtil from './../util/businesses_util';
import * as BusinessCategoriesUtil from './../util/business_categories_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_SELECTED_BUSINESS_CATEGORIES = 'RECEIVE_SELECTED_BUSINESS_CATEGORIES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

export const receiveBusinesses = selectedBusinessCategories => {
  return {
    type: RECEIVE_BUSINESSES,
    selectedBusinessCategories
  };
};

export const receiveSelectedBusinesses = businesses => {
  return {
    type: RECEIVE_SELECTED_BUSINESS_CATEGORIES,
    businesses
  };
};

export const receiveBusiness = business => {
  return {
    type: RECEIVE_BUSINESS,
    business
  };
};

export const requestAllBusinesses = () => {
  return dispatch => {
    return BusinessesApiUtil.fetchBusinesses().then( businesses => {
      return dispatch(receiveAllBusinesses(businesses));
    });
  };
};



export const requestSelectedBusinessCategories = selectedCategory => {
  return dispatch => {
    return BusinessCategoriesUtil.fetchSelectedBusinessCategories(selectedCategory).then(  selectedBusinessCategories => {
      return dispatch(receiveSelectedBusinesses(selectedBusinessCategories));
    } );
  };
};

export const requestSingleBusiness = id => {

  return dispatch => {
    return BusinessesApiUtil.fetchBusiness(id).then( business => {
      return dispatch(receiveBusiness(business));
    });
  };
};
