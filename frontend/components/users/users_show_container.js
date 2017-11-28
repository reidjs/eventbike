import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBookmarks, getTickets } from '../../actions/user_actions';
import { getEvents } from '../../actions/events_actions';
import { getAllEventsInArray } from '../../reducers/selectors';
import UsersShow from './users_show';
import values from 'lodash/values';
const mapStateToProps = (state, ownProps) => {
  const user = state.session.currentUser
  // const bookmarkedEvents = values(state.entities.bookmarks)
  // const registeredEvents = values(state.entities.tickets)
  const events = values(state.entities.events);
  let bookmarkedEvents = getAllEventsInArray(state.entities.events, state.entities.bookmarks)
  // console.log('books', bookmarkedEvents)
  let registeredEvents = getAllEventsInArray(state.entities.events, state.entities.registrations)
  return {
    user,
    events,
    bookmarkedEvents,
    registeredEvents
    //will be state.entities.user
  }
}

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch (getEvents()),
  //
  getbookmarks: () => dispatch(getBookmarks()),
  gettickets: () => dispatch(getTickets()) 
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(UsersShow));
