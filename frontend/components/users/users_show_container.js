import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { getBookmarks, getTickets } from '../../actions/user_actions';
import { getUserEvents, getRegisteredEvents, getBookmarkedEvents } from '../../actions/events_actions';
import { getEvents } from '../../actions/events_actions';
import { getAllEventsInArray } from '../../reducers/selectors';
import UsersShow from './users_show';
import values from 'lodash/values';
const mapStateToProps = (state, ownProps) => {
  const user = state.session.currentUser
  // const bookmarkedEvents = values(state.entities.bookmarks)
  // const registeredEvents = values(state.entities.tickets)
  // const myevents = values(state.entities.events);
  // let bookmarkedEvents = getAllEventsInArray(state.entities.events, state.entities.bookmarks)
  // const bookmarkedEvents = values(state.entities.events);
  // const registeredEvents = values(state.entities.events);
  // let registeredEvents = getAllEventsInArray(state.entities.events, state.entities.registrations)
  const events = values(state.entities.events);
  const pathname = ownProps.location.pathname.split('/')[3]
  return {
    pathname,
    user,
    events,
    // myevents,
    // bookmarkedEvents,
    // registeredEvents
    //will be state.entities.user
  }
}

const mapDispatchToProps = dispatch => ({
  getmyevents: () => dispatch (getUserEvents()),
  //
  getbookmarks: () => dispatch(getBookmarkedEvents()),
  gettickets: () => dispatch(getRegisteredEvents()) 
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(UsersShow));
