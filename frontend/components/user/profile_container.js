import { connect } from 'react-redux';
import Profile from './profile';
import { fetchAllUnrelatedReviews } from '../../actions/reviews_actions';
import { fetchCurrentUser } from '../../actions/sessions_actions';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';

const mapStateToProps = (state) => {
  return {
    reviews: state.entities.users[state.session.id].reviews,
    currentUser: state.entities.users[state.session.id],
    businessCategories: Object.values(state.entities.businessCategories)
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories()),
    fetchCurrentUser: user => dispatch(fetchCurrentUser(user)),
    fetchAllUnrelatedReviews: () => dispatch(fetchAllUnrelatedReviews()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
