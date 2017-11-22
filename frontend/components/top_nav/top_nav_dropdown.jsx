import React from 'react'
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container'
const TopNavDropDown = ({currentUser, logout}) => {
  if (currentUser === null) {
    // return (
    //     <Link to="/signup">Sign in</Link>
    // )
    return (
      <SessionFormContainer currentUser={currentUser} logout={logout} location={location}/>
    )
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

