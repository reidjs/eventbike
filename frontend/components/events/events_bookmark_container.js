//This is for the small show containers, not the full size one.
import { connect } from 'react-redux';
// import { requestRegistration, removeRegistration } from '../../actions/events_actions'
import { requestBookmark, requestUnBookmark } from '../../actions/user_actions'
import EventsBookmarkButton from './events_bookmark_button';

//pass the event to this through ownProps
const mapStateToProps = (state, ownProps) => {
  const event = ownProps.event;
  const currentUser = state.session.currentUser;
  // const square = ownProps.square;
  return {
    currentUser, 
    event
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookmark: (eventId) => dispatch(requestBookmark(eventId)),
    unbookmark: (eventId) => dispatch(requestUnBookmark(eventId))
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsBookmarkButton);