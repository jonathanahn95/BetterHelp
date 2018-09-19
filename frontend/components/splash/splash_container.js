import { connect } from 'react-redux';
import { fetchBusinessCategories } from '../../actions/business_category_actions';
import { logout } from  '../../actions/sessions_actions';

import Splash from './splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };

};

const mapDispatchToPros = dispatch => {
  return {
    fetchBusinessCategories: () => dispatch(fetchBusinessCategories()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Splash);
