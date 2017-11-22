//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/components/session_form/session_form_container.js
import { connect } from 'react-redux';

import { login, logout, signup, lookup, reset } from '../../actions/session_actions';
import SessionModalForm from './session_modal_form';


const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  // debugger
  console.log(ownProps)
  console.log(state)
  return {
    loggedIn: Boolean(state.session.currentUser),
    ownProps: ownProps,
    history: ownProps.history,
    errors: state.errors,
    potentialUser: state.session.potentialUser,
    newUserFlag: state.session.newUserFlag
  }
  // errors: state.errors.session
};

const mapDispatchToProps = (dispatch, { location }) => {
  const endLocation = location.pathname.slice(1); //must set up router
  // let formType = 'login'
  // const processForm = (formType === 'login') ? login : signup;
  return {
    lookup: (username) => dispatch(lookup(username)),
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    reset: () => dispatch(reset())
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModalForm);