import React from 'react'
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container'

class TopNavDropDown extends React.Component {
  constructor() {
    super()
    // this.currentUser = 
    // this.currentUser = this.props.currentUser;

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
// const TopNavDropDown = ({currentUser, logout}) => {
// }
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

