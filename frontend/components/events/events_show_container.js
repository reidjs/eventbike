import { connect } from 'react-redux';
import { requestRegistration, removeRegistration } from '../../actions/events_actions'
import EventsListItem from './events_list_item';

//pass the event to this through ownProps
const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const event = ownProps.event;
  const eventsAttending = state.session.currentUser.events_attending;
  return {
    currentUser, 
    event,
    eventsAttending
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (eventId, userId) => dispatch(requestRegistration(eventId, userId)),
    unregister: (eventId, userId) => dispatch(removeRegistration(eventId, userId)),
    bookmark: () => {}
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListItem);