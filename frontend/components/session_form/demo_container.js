//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/components/session_form/session_form_container.js
import { connect } from 'react-redux';
import { demoUser } from '../../actions/ui_actions';
import DemoLogin from './demo_login';

const mapDispatchToProps = (dispatch) => {
  return {
    demouser: (user) => dispatch(demoUser(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DemoLogin);