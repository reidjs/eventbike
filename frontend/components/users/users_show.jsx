import React from 'react'
import GenericEventsShowList from '../generic_events_show_list';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute,
} from '../../util/route_util';
class UsersShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state={bookmarkedEvents:{}}
  }
  componentWillMount() {
    this.props.getbookmarks();
    this.props.gettickets();
  }
  render() {
    this.props.user.attending_events.map((event) => {
      // return <EventsListItem
      //   key={event.title}
      //   event={}
      // />
    })
    // <GenericEventsShowList events={this.props.bookmarkedEvents}/>
    // debugger
    return (
      <div>
        {this.props.user.username}
        <Route path='/users/:id/bookmarks' render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.bookmarkedEvents}/>} />

        <Route path='/users/:id/tickets' render={routeProps => 
              <GenericEventsShowList {...routeProps} 
              events={this.props.registeredEvents}/>} />
        {/*fetch events user is attending*/}
        {this.props.user.attending_events}
        User information goes here
      </div>  
    )
  }
}
{/* <PropsRoute path="/users" component={GenericEventsShowList} events={this.props.bookmarkedEvents}/> */}

export default UsersShow;