import React from 'react'
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container'
const TopNavDropDown = ({currentUser, logout}) => {
  if (currentUser === null || currentUser === undefined) {
    // return (
    //     <Link to="/signup">Sign in</Link>
    // )
    //we need a button for sign up...
    return (
      <Link to="/signin">SIgn in</Link>
    )
    // <SessionFormContainer currentUser={currentUser} logout={logout} location={location}/>
  } else {
    //display dropdown
    return (
      <button className="btn btn-primary" onClick={logout}>Logout </button>
    )
  }
}
export default TopNavDropDown;
// class TopNavDropDown extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(props)
//     this.currentUser = props.currentUser;
//     this.logout = props.logout;
//     this.state=({})
//   }
//   componentWillUpdate() {
//     console.log(this.props)
//   }
//   render() {
  // }
  // const TopNavDropDown = ({currentUser, logout}) => {
//   console.log(logout)
// }

