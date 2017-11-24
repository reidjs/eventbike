import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getEvents }from '../../actions/events_actions'
import EventsIndex from './events_index';
import values from 'lodash/values' //convert to array
const mapStateToProps = (state, ownProps) => {
  // console.log("nav dropdown: ", session);
  console.log(state)
  return {
    //will be state.entities.events
    events: values(state.entities.events)
  }
}

const mapDispatchToProps = dispatch => {
  // console.log(getEvents)
  // debugger
  return ({
  //will be bookmark and register 
    getevents: () => dispatch(getEvents()),
    register: () => {},
    bookmark: () => {}
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(EventsIndex));
