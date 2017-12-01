//This is for the small show containers, not the full size one.
import { connect } from 'react-redux';
// import { requestRegistration, removeRegistration } from '../../actions/events_actions'
// import { requestBookmark, requestUnBookmark, requestRegistration, removeRegistration } from '../../actions/user_actions'
import EventsListItem from './events_list_item';

//pass the event to this through ownProps
const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const event = ownProps.event;
  const square = ownProps.square;
  console.log(ownProps)
  // debugger
  return {
    currentUser, 
    event, 
    square
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // register: (eventId, userId) => dispatch(requestRegistration(eventId, userId)),
    // unregister: (eventId, userId) => dispatch(removeRegistration(eventId, userId)),
    // bookmark: (eventId) => dispatch(requestBookmark(eventId)),
    // unbookmark: (eventId) => dispatch(requestUnBookmark(eventId))
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListItem);