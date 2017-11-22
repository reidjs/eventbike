import React from 'react';
import EventItem from './event_item';
import NavDropDown from './test_dropdown/nav_drop_down';
import SessionFormContainer from './session_form/session_form_container';
import TopNavContainer from './top_nav/top_nav_container';
import SessionModalForm from './session_form/session_modal_form';
import UsernameModal from './modal/username_modal';
import PasswordModal from './modal/password_modal';
import SigninModal from './modal/signin_modal';
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

const event = {
    //state props
    title: "Event title goes here",
    description: "A short descript of the event",
    image_url: "",
    datetime: "",
    location: "",
    category: "",
    //dispatch functions
    register: () => {console.log("User registered")},
    bookmark: () => {console.log("Event saved")}
  };

const App = () => (
    <div>
        <TopNavContainer />
        Welcome to eventbike 
        <Switch>
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
        </Switch>
        <SigninModal />
    </div>
)

export default App;