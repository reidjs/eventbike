import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import TopNavContainer from './top_nav/top_nav_container';
import SessionModalForm from './session_form/session_modal_form';
import NewEventContainer from './events/new_events/new_event_container';
// import FlashContainer from './flash/flash_container';
import ShowEventContainer from './events/show_event/show_event_container';
// import Greeting from './greeting';
import Footer from './footer';
import EventsContainer from './events/events_container';
import UsersShowContainer from './users/users_show_container';
import SplashContainer from './splash/splash_container';
// import SplashEventsIndex from './splash_events_index';
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
  //note you may be able to pass props to a route using standard method
  return (
    <div>

        <Route path="/" component={TopNavContainer}/>
        <div className="main">
          <Switch>
            <Route exact path="/" component={SplashContainer}/>
            <Route exact path="/events" component={EventsContainer}/>
            <Route exact path="/query/:id" component={EventsContainer}/>
            <Route exact path="/categories/:id" component={EventsContainer} /> 
            <Route path="/events/:id" component={ShowEventContainer}/>
            <ProtectedRoute exact path="/create" component={NewEventContainer}/>
            <AuthRoute path="/signin" component={SessionFormContainer} />
            <ProtectedRoute path="/users/" component={UsersShowContainer}/>
          </Switch>
        </div>
        <Route path="/" component={Footer} />
    </div>
  )
}

export default App;
