import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
// import { flashMessage } from '../actions/ui_actions'
import { flashMessage } from 'redux-flash';
const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);
const flash = (text) => {
  // console.log('attempting to flash')
  dispatch(flashMessage(text))
}
const Protected = ({ component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <div>
        {flash('Sorry, you must be signed in to perform this action')}
        <Redirect to="/signin" />
      </div>
    )
  )} />
);

const ProtectedFunc = (func, loggedIn) => (
  loggedIn ? (
    func()
  ) : (
    flash('Sorry, you must be logged in to do that')
  )
) 



const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const ProtectedFunction = connect(mapStateToProps, null)(ProtectedFunc)

// export const ProtectedFunction = withRouter(connect(mapStateToProps, null)(ProtectedFunc))