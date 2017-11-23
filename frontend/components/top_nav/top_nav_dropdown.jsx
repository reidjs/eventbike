import React from 'react'
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container'

class TopNavDropDown extends React.Component {
  constructor() {
    super()

  }
  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      console.log('here')
    }
  }
  

  render() {
    if (!this.props.currentUser) {
      return (
        <Link to="/signin">Sign in</Link>
      )
    } else {
      //display dropdown
      return (
        <button className="btn btn-primary" onClick={logout}>Logout </button>
      )
    }
  }
}

export default TopNavDropDown;


