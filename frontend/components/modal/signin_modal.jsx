import React from 'react'
import UsernameModal from './username_modal';
import PasswordModal from './password_modal';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
const SigninModal = () => (
  <div>
    <Switch>
      <Route exact path="/signin" component={UsernameModal} />
      <Route path="/signin/login" component={PasswordModal} />
    </Switch>
  </div>
)

export default SigninModal