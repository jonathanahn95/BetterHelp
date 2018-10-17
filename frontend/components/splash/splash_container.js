import { connect } from 'react-redux';
import { logout } from  '../../actions/sessions_actions';
import { requestAllBusinesses } from '../../actions/businesses_actions';
import { fetchAllUnrelatedReviews } from '../../actions/reviews_actions';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    businesses: Object.values(state.entities.businesses),
    reviews: Object.values(state.entities.reviews),
    businessCategories: Object.values(state.entities.businessCategories)
  };
};

const mapDispatchToPros = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllUnrelatedReviews: () => dispatch(fetchAllUnrelatedReviews()),
    requestAllBusinesses: () => dispatch(requestAllBusinesses()),
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Splash);
