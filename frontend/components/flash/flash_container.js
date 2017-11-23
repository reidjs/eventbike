import { connect } from 'react-redux';

import { flashMessage } from '../../actions/ui_actions';
import Flash from './flash';

const mapStateToProps = (state) => {
  //may need ownprops
  console.log(state.ui)
  const message = state.ui.flash
  return {
    message
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    flashMessage: (message) => dispatch(flashMessage(message)),
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flash);