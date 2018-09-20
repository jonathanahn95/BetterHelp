import { connect } from 'react-redux';
import { logout } from  '../../actions/sessions_actions';
import { requestAllBusinesses } from '../../actions/businesses_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    businesses: Object.values(state.entities.businesses)
  };
};

const mapDispatchToPros = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestAllBusinesses: () => dispatch(requestAllBusinesses())
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Splash);
