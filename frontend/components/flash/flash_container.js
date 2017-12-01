import { connect } from 'react-redux';
import { hideFlash } from '../../actions/ui_actions';
import Flash from './flash';
import values from 'lodash/values';
const mapStateToProps = (state) => {
  //may need ownprops
  const messages = values(state.flash.messages)
  // dispatch(clearFlash())
  return {
    messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideflash: (id) => dispatch(hideFlash(id))
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flash);