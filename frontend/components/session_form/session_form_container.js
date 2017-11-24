//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/components/session_form/session_form_container.js
import { connect } from 'react-redux';

import { login, logout, signup, lookup, reset, reseterrors } from '../../actions/session_actions';
import { demoUser } from '../../actions/ui_actions';
import SessionModalForm from './session_modal_form';
import values from 'lodash/values'

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    ownProps: ownProps,
    history: ownProps.history,
    errors: state.errors,
    potentialUser: state.session.potentialUser,
    newUserFlag: state.session.newUserFlag,
    ui: state.ui
  }
  // errors: state.errors.session
};

const mapDispatchToProps = (dispatch, { location }) => {
  // const endLocation = location.pathname.slice(1); //must set up router
  // let formType = 'login'
  // const processForm = (formType === 'login') ? login : signup;
  return {
    demouser: (user) => dispatch(demoUser(user)),
    lookup: (username) => dispatch(lookup(username)),
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    reset: () => dispatch(reset()),
    reseterrors: () => dispatch(reseterrors())
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModalForm);