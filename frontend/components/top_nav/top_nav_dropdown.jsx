import React from 'react'
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container'

class TopNavDropDown extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      console.log('user logged in')
    } else {
      console.log('user logged out')
      
    }
  }

  handleClick(e) {
    e.preventDefault();
    // console.log(logout);
    console.log(this.props.logout)
    // console.log(login)
    this.props.logout()
  }
  

  render() {
    if (!this.props.currentUser) {
      return (
        <Link to="/signin">Sign in</Link>
      )
    } else {
      //display dropdown
      return (
        <button className="btn btn-primary" onClick={this.handleClick}>Logout </button>
      )
    }
  }
}

export default TopNavDropDown;


