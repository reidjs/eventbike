import { connect } from 'react-redux';
import NewEventForm from './new_event_form';
import { withRouter } from 'react-router-dom';

import { newEvent, resetEventErrors } from '../../../actions/events_actions';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.events;
  const user = state.session.currentUser;
  const history = ownProps.history;
  const events = state.entities.events; //pass these to detect new event creation
  return {
    events,
    user,
    history,
    errors
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submit: (eventDetails) => dispatch(newEvent(eventDetails)),
    reseterrors: () => dispatch(resetEventErrors())
  }
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEventForm));