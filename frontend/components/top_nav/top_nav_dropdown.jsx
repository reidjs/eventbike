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
        <div className="user-dropdown">
          <Link to="/signin">SIGN IN</Link>
        </div>
      )
    } else {
      const userId = this.props.currentUser.id
      return (
        <div className="user-dropdown">
          <Link to={`/users/${userId}/bookmarks`}>{this.props.currentUser.username}</Link>
          <div className="submenu">{/*Hacky way to have more forgiving dropdown mouse movement*/}</div>
          <ul className="user-dropdown-content">
          {/* //These links should be their own components and display a circle representing their quantity */}
            <li><Link to={`/users/${userId}/bookmarks`}>Saved Events</Link></li>
            <li><Link to={`/users/${userId}/tickets`}>Tickets</Link></li>
            <li><button className="btn btn-primary" onClick={this.handleClick}>Logout </button></li>
          </ul>
        </div>
      )
    }
  }
}

export default TopNavDropDown;


