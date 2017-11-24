import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import TopNavContainer from './top_nav/top_nav_container';
import SessionModalForm from './session_form/session_modal_form';
import NewEventForm from './event_form/new_event_form';
import FlashContainer from './flash/flash_container';
import Greeting from './greeting';
import Footer from './footer';
import EventsIndexContainer from './events/events_index_container';
import UsersShowContainer from './users/users_show_container';
import { 
  AuthRoute, 
  ProtectedRoute 
} from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
const title = "User information"

//authroutes should take care of issues where the logout button is not re-rendering.
const App = () => {
  // console.log(loggedIn)
  // console.log(currentUser)
  //note you may be able to pass props to a route using standard method
  return (
    <div>
        <Route path="/" component={TopNavContainer}/>
        <Route path="/" component={FlashContainer} />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Greeting}/>
            <Route exact path="/events" component={EventsIndexContainer}/>
            <ProtectedRoute path="/events/new" component={NewEventForm}/>
            <AuthRoute path="/signin" component={SessionFormContainer} />
            <ProtectedRoute path="/users/" component={UsersShowContainer}/>
          </Switch>
        </div>
        <Route path="/" component={Footer} />
    </div>
  )
}
{/* <TopNavContainer /> */}

export default App;
{/* <AuthRoute path="/login" component={SessionFormContainer} />
<AuthRoute path="/signup" component={SessionFormContainer} /> */}
// const event = {
//     //state props
//     title: "Event title goes here",
//     description: "A short descript of the event",
//     image_url: "",
//     datetime: "",
//     location: "",
//     category: "",
//     //dispatch functions
//     register: () => {console.log("User registered")},
//     bookmark: () => {console.log("Event saved")}
//   };