import { connect } from 'react-redux';
import { logout } from  '../../actions/sessions_actions';

import Splash from './splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToPros = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Splash);
