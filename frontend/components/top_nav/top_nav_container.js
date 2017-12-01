import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout, login } from '../../actions/session_actions';
import TopNav from './top_nav';

const mapStateToProps = (state, ownProps) => {
  const flash = Boolean(state.flash.messages.length > 0)
  return {
    flash: flash, 
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
