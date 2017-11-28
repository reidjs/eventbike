import React from 'react'
import { fetchMyEvents } from '../../util/user_api_util';
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
import values from 'lodash/values'
class UsersShow extends React.Component {
  constructor(props) {
    super(props);
    this.events = props.events;
    this.bookmarkedEvents = props.bookmarkedEvents;
    this.myEvents = [];
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
    }
    // console.log(nextProps.location.pathname)
    //get the last part of the url
    let path = nextProps.location.pathname.split('/').slice(-1)[0];
    // console.log(path)
    if (path === 'myevents') {
      // console.log('here')
      fetchMyEvents().then(
        (res) => {
          console.log(res)
          this.myEvents = values(res)
        }
      )
    }
    // this.events = nextProps.events 
    // this.bookmarks = nextState.bookmarkedEvents
    // console.log(this.bookmarkedEvents)
    // this.props.getbookmarks();
    // this.props.gettickets();
    // if (nextProps.location.pathname === )
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
              events={this.bookmarkedEvents}/>} />

        <Route path={ticketsPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.events}/>} />
        <Route path={myEventsPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.myEvents}/>} />
      </div>  
    )
  }
}
{/* <PropsRoute path="/users" component={GenericEventsShowList} events={this.props.bookmarkedEvents}/> */}

export default UsersShow;