import { connect } from 'react-redux';
import NewEventForm from './new_event_form';
import { withRouter } from 'react-router-dom';

import { newEvent, resetEventErrors } from '../../../actions/events_actions';
const mapStateToProps = (state) => {
  const categories = ["Other", "Social", "Joyride"];
  const errors = state.errors.events;
  const user = state.session.currentUser;
  return {
    user,
    categories,
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