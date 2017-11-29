//This is for the small show containers, not the full size one.
import { connect } from 'react-redux';
// import { requestRegistration, removeRegistration } from '../../actions/events_actions'
import { requestRegister, requestUnRegister } from '../../actions/user_actions'
import EventsRegisterButton from './events_register_button';
import { withRouter } from 'react-router-dom';

//pass the event to this through ownProps
const mapStateToProps = (state, ownProps) => {
  const event = ownProps.event;
  // const history = this.state.history
  const history = ownProps.history;
  const currentUser = state.session.currentUser;
  // if (ownProps.customButton)
  // const square = ownProps.square;
  return {
    currentUser, 
    history,
    event
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (eventId) => dispatch(requestRegister(eventId)),
    unregister: (eventId) => dispatch(requestUnRegister(eventId))
  };
};
// processForm: user => dispatch(processForm(user)),

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsRegisterButton));