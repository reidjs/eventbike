import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBookmarks } from '../../actions/user_actions';
import UsersShow from './users_show';
import values from 'lodash/values';
const mapStateToProps = (state, ownProps) => {
  const user = state.session.currentUser
  const bookmarkedEvents = values(state.entities.bookmarks)
  return {
    user,
    bookmarkedEvents
    //will be state.entities.user
  }
}

const mapDispatchToProps = dispatch => ({
  //
  getbookmarks: () => dispatch(getBookmarks())  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(UsersShow));
