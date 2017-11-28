import React from 'react'
import GenericEventsShowList from '../generic_events_show_list';
import {
  Route,
  Redirect,
  Switch,
  NavLink,
  HashRouter
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute,
} from '../../util/route_util';
class UsersShow extends React.Component {
  constructor(props) {
    super(props);
    this.events = props.events;
    this.bookmarkedEvents = props.bookmarkedEvents;

    // this.bookmarkedEvents = props.bookmar
  }
  componentWillMount() {
    this.props.getEvents();
    this.props.getbookmarks();
    // this.props.gettickets();
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.location.pathname !== this.props.location.pathname || 
      nextProps.bookmarkedEvents.length !== this.bookmarkedEvents.length) {
      this.props.getEvents();
      // console.log(nextProps, nextState);
      // console.log('here', nextProps.bookmarkedEvents)
      this.bookmarkedEvents = nextProps.bookmarkedEvents
      console.log(this.bookmarkedEvents)
    }
    // this.events = nextProps.events 
    // this.bookmarks = nextState.bookmarkedEvents
    // console.log(this.bookmarkedEvents)
    // this.props.getbookmarks();
    // this.props.gettickets();
  }
  render() {
    const bookmarkPath = `/users/${this.props.user.id}/bookmarks`;
    const ticketsPath = `/users/${this.props.user.id}/tickets`;
    const myEventsPath = `/users/${this.props.user.id}/myevents`;
    return (
      <div className="users-show-container">
        <h1>{this.props.user.username}</h1>
        <div className="users-show-nav-links">
          <NavLink to={ticketsPath}>Tickets</NavLink>
          <NavLink to={bookmarkPath}>Bookmarks</NavLink>
          <NavLink to={myEventsPath}>My Events</NavLink>
        </div>
        <Route path={bookmarkPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.bookmarkedEvents}/>} />

        <Route path={ticketsPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.events}/>} />
      </div>  
    )
  }
}
{/* <PropsRoute path="/users" component={GenericEventsShowList} events={this.props.bookmarkedEvents}/> */}

export default UsersShow;