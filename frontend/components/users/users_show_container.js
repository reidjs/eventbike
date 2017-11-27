import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBookmarks, getTickets } from '../../actions/user_actions';
import UsersShow from './users_show';
import values from 'lodash/values';
const mapStateToProps = (state, ownProps) => {
  const user = state.session.currentUser
  const bookmarkedEvents = values(state.entities.bookmarks)
  const registeredEvents = values(state.entities.tickets)
  return {
    user,
    bookmarkedEvents,
    registeredEvents
    //will be state.entities.user
  }
}

const mapDispatchToProps = dispatch => ({
  //
  getbookmarks: () => dispatch(getBookmarks()),
  gettickets: () => dispatch(getTickets()) 
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(UsersShow));
