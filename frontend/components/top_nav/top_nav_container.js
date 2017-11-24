import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout, login } from '../../actions/session_actions';
import TopNav from './top_nav';

const mapStateToProps = (state, ownProps) => {
  // console.log("nav dropdown: ", session);
  console.log(state)
  return {
    location: ownProps.location,
    currentUser: state.session.currentUser,
    potentialUser: state.session.potentialUser
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(TopNav));
