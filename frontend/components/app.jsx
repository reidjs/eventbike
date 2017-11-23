import React from 'react';
import EventItem from './event_item';
import NavDropDown from './test_dropdown/nav_drop_down';
import SessionFormContainer from './session_form/session_form_container';
import TopNavContainer from './top_nav/top_nav_container';
import SessionModalForm from './session_form/session_modal_form';
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

  return (
    <div>
        <Route path="/" component={TopNavContainer} />
        <Switch>
          <AuthRoute path="/signin" component={SessionFormContainer} />
        </Switch>
        Welcome to eventbike 
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