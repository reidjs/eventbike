//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/components/session_form/session_form_container.js
import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionModalForm from './session_modal_form';


const mapStateToProps = (state) => {
  // console.log(state)
  // debugger
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
  // errors: state.errors.session
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1); //must set up router
  // let formType = 'login'
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModalForm);