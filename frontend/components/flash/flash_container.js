import { connect } from 'react-redux';

import { flashMessage, clearFlash } from '../../actions/ui_actions';
import Flash from './flash';
import values from 'lodash/values';
const mapStateToProps = (state) => {
  //may need ownprops
  // console.log(state.ui)
  // console.log(state.flash.messages)
  const messages = values(state.flash.messages)
  // console.log(messages)
  // dispatch(clearFlash())
  return {
    messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    flashMessage: (message) => dispatch(flashMessage(message)),
    clearFlash: () => dispatch(clearFlash())
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flash);