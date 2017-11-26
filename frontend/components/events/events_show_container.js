import { connect } from 'react-redux';
import { requestRegistration } from '../../actions/events_actions'
import EventsListItem from './events_list_item';

//pass the event to this through ownProps
const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const event = ownProps.event;
  return {
    currentUser, 
    event
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (eventId, userId) => dispatch(requestRegistration(eventId, userId)),
    bookmark: () => {}
  };
};
// processForm: user => dispatch(processForm(user)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListItem);