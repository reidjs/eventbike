import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout, login } from '../../actions/session_actions';
import TopNav from './top_nav';

const mapStateToProps = ({ session }) => {

  console.log(session)  
  return {
  currentUser: session.currentUser
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
