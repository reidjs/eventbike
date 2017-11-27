import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getEvents, requestRegistration } from '../../actions/events_actions'
import Events from './events';
import values from 'lodash/values' //convert to array
const mapStateToProps = (state, ownProps) => {
  //need the current user so that we can register them for events and check if already registered
  // console.log(ownProps)
  return {
    //will be state.entities.events
    currentUser: state.session.currentUser,
    events: values(state.entities.events),
    noSideNav: ownProps.noSideNav, //for splash index
  }
}

const mapDispatchToProps = dispatch => {
  return ({
  //will be bookmark and register 
    getevents: () => dispatch(getEvents()),
    register: (eventId, userId) => dispatch(requestRegistration(eventId, userId)),
    bookmark: () => {}
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Events));
