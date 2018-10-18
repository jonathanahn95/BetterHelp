import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state) => {
  debugger
  return {
    reviews: state.entities.reviews,
    currentUserId: state.session.currentUserId,
    user: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(mapStateToProps, mapDispatchToPros)(Profile);
