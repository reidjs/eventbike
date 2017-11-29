import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getEvents, requestRegistration } from '../../actions/events_actions'
import Events from './events';
import { getAllEvents } from '../../reducers/selectors';
import values from 'lodash/values' //convert to array
const mapStateToProps = (state, ownProps) => {
  //Here is where you can use selectors to do categories
  return {
    //will be state.entities.events
    currentUser: state.session.currentUser,
    events: getAllEvents({events: state.entities.events}),
    noSideNav: ownProps.noSideNav, //for splash index
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getevents: () => dispatch(getEvents()),
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Events));
