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
    this.events = props.events
    // this.state={bookmarkedEvents:{}}
  }
  componentWillMount() {
    this.props.getbookmarks();
    this.props.gettickets();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.events);
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
          <NavLink to={bookmarkPath}>Bookmarks</NavLink>
          <NavLink to={ticketsPath}>Tickets</NavLink>
          <NavLink to={myEventsPath}>My Events</NavLink>
        </div>
        <Route path={bookmarkPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.events}/>} />

        <Route path={ticketsPath} render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.events}/>} />
      </div>  
    )
  }
}
{/* <PropsRoute path="/users" component={GenericEventsShowList} events={this.props.bookmarkedEvents}/> */}

export default UsersShow;