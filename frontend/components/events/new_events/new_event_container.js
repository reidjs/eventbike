import { connect } from 'react-redux';
import NewEventForm from './new_event_form';
import { newEvent } from '../../../actions/events_actions';
const mapStateToProps = (state) => {
  const categories = ["Other", "Social", "Joyride"]
  return {
    categories
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submit: (eventDetails) => dispatch(newEvent(eventDetails))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEventForm);