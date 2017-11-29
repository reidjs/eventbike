import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getEvents, getCategory } from '../../actions/events_actions'
import Events from './events';
import { getAllEvents } from '../../reducers/selectors';
import values from 'lodash/values' //convert to array
//fetch specific events based on category using URL 
const mapStateToProps = (state, ownProps) => {
  //Here is where you can use selectors to do categories
  const path = ownProps.location.pathname
  const events = getAllEvents({events: state.entities.events})
  return {
    path,
    //will be state.entities.events
    currentUser: state.session.currentUser,
    events,
    // events: getAllEvents({events: state.entities.events}),
    noSideNav: ownProps.noSideNav, //for splash index
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getevents: (query) => dispatch(getEvents(query)),
    getcategory: (category) => dispatch(getCategory(category))
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Events));
