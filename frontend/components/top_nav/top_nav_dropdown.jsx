import React from 'react'
import { Link } from 'react-router-dom';
const TopNavDropDown = ({currentUser, logout}) => {
  if (currentUser === null) {
    return (
      <div>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Sign in</Link>
      </div>
    )
  } else {
  return (
      <button onClick={logout}>Logout </button>
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

