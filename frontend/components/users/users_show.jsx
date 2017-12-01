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
    this.getEventsFromPath = this.getEventsFromPath.bind(this);
  }
  componentWillMount() {
    this.getEventsFromPath(this.props.pathname)
  }
  getEventsFromPath(path) {
    if (path === "myevents") {
      this.props.getmyevents();
    }
    if (path === "bookmarks") {
      this.props.getbookmarks();
    }
    if (path === "tickets") {
      this.props.gettickets();
    }
  }
  componentWillReceiveProps(nextProps, nextState) {

    if (nextProps.pathname !== this.props.pathname) {
      this.getEventsFromPath(nextProps.pathname);
      
    }
    if (this.props.events !== nextProps.events) {
      this.events = nextProps.events;
    }
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
        <GenericEventsShowList events={this.events}/>
        {/* <Route path={bookmarkPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.bookmarkedEvents}/>} />

        <Route path={ticketsPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.registeredEvents}/>} />
        <Route path={myEventsPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.myevents}/>} /> */}
      </div>  
    )
  }
}
{/* <PropsRoute path="/users" component={GenericEventsShowList} events={this.props.bookmarkedEvents}/> */}

export default UsersShow;