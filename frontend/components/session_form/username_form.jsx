import React from 'react'
import { fetchUserByUsername } from '../../util/session_api_util'
class UsernameForm extends React.Component {
  constructor() {
    super();
    //0: pending, 1: true, -1: false
    this.state = ({verifiedUsername: 0, username: ""})
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleSubmitUsername = this.handleSubmitUsername.bind(this);
  }
  handleChangeUsername(e) {
    // console.log(e.target.value)
    this.setState({username: e.target.value})
  }
  handleSubmitUsername(e) {
    e.preventDefault();
    const username = this.state.username;
    //if user exists 
    //tell modal to show enter password field 
    //
    // this.props.processForm({user});
    // console.log('here')
    // this.props.lookup(username)
    console.log('here')
    fetchUserByUsername(username)
      .then(username => {
        return this.setState({verifiedUsername: 1})
      })
      .fail(err => {
        return this.setState({verifiedUsername: -1})
      })
    // .then(username => this.setState({username}))
  }
  render() {
    //Do conditional logic here. If username is fetched show a certain 
    //message, otherwise 
    let message;
    switch(this.state.verifiedUsername) {
      case 1: 
        message = "Welcome back! Enter your password to log in"
        break 
      case -1:
        message = "Enter a password to sign up for an account!"
        break 
      default:
        message = "Enter username";
    }
    return (
      <div>
        {message} <br/>
        <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
        <button onClick={this.handleSubmitUsername}>Submit</button>
      </div>
    )
  }
}
export default UsernameForm