import React from 'react'
import { Link, Route } from 'react-router-dom';
// import SessionFormContainer from '../session_form/session_form_container'

class TopNavDropDown extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      // console.log('user logged in')
    } else {
      // console.log('user logged out')
      
    }
  }

  handleClick(e) {
    e.preventDefault();
    // console.log(logout);
    // console.log(login)
    this.props.logout()
  }
  

  render() {
    if (!this.props.currentUser) {
      return (
        <Link to="/signin">Sign in</Link>
      )
    } else {
      const userId = this.props.currentUser.id
      return (
        <div className="user-dropdown">
          <span>{this.props.currentUser.username}</span>
          <div className="user-dropdown-content">
          {/* //These links should be their own components and display a circle representing their quantity */}
            <Link to={`/users/${userId}/bookmarks`}>Saved Events</Link>
            <Link to={`/users/${userId}/tickets`}>Tickets</Link>
            <button className="btn btn-primary" onClick={this.handleClick}>Logout </button>
          </div>
        </div>
      )
    }
  }
}

export default TopNavDropDown;


