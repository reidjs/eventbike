import { connect } from 'react-redux';
import { getEvent } from '../../../actions/events_actions';
import { requestRegistration, removeRegistration } from '../../../actions/events_actions'
import { requestBookmark, requestUnBookmark } from '../../../actions/session_actions'
import ShowEvent from './show_event';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  const eventId = ownProps.match.params.id
  const event = values(state.entities.events)[0]
  return {
    eventId,
    event
  }
}

const mapDispatchToProps = dispatch => ({
  getevent: (eventId) => dispatch(getEvent(eventId)),
  register: (eventId, userId) => dispatch(requestRegistration(eventId, userId)),
  unregister: (eventId, userId) => dispatch(removeRegistration(eventId, userId)),
  bookmark: (eventId) => dispatch(requestBookmark(eventId)),
  unbookmark: (eventId) => dispatch(requestUnBookmark(eventId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps)
(ShowEvent);