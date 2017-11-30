import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Splash from './splash'
import { getEvents } from '../../actions/events_actions'
import values from 'lodash/values'
const mapStateToProps = (state, ownProps) => {

  return {
    ownProps,
    events: values(state.entities.events)
  }
}
const mapDispatchToProps = dispatch => ({
  getevents: () => dispatch(getEvents())
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Splash));
