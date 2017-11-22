import React from 'react'
import { fetchUserByUsername } from '../../util/session_api_util'
class UsernameForm extends React.Component {
  constructor() {
    super();
    //0: pending, 1: true, -1: false
    this.state = ({verifiedUsername: 0, username: "", password: ""})
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmitUsername = this.handleSubmitUsername.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
  }
  handleChangeUsername(e) {
    // console.log(e.target.value)
    this.setState({username: e.target.value})
  }
  handleChangePassword(e) {
    // console.log(e.target.value)
    this.setState({password: e.target.value})
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
        return this.setState({verifiedUsername: 1, submitAction: this.props.login})
      })
      .fail(err => {
        return this.setState({verifiedUsername: -1, submitAction: this.props.signup})
      })
    // .then(username => this.setState({username}))
  }
  handleSubmitLogin(e) {
    const user = {username: this.state.username, password: this.state.password}
    console.log("login with ", user)
    this.props.login(user)
  }
  handleSubmitSignup(e) {
    const user = {username: this.state.username, password: this.state.password}
    this.props.signup(user)
  }
  render() {
    //Do conditional logic here. If username is fetched show a certain 
    //message, otherwise 
    let message;
    let action;
    let inputHandler;
    let inputValue;
    switch(this.state.verifiedUsername) {
      case 1: 
        message = "Welcome back! Enter your password to log in";
        action = this.handleSubmitLogin; 
        inputValue = this.state.password;
        inputHandler = this.handleChangePassword;
        break 
      case -1:
        message = "Enter a password to sign up for an account!"
        action = this.handleSubmitSignup;
        inputValue = this.state.password;
        inputHandler = this.handleChangePassword;        
        break 
      default:
        message = "Enter username";
        inputHandler = this.handleChangeUsername;     
        inputValue = this.state.username   
        action = this.handleSubmitUsername
    }
    return (
      <div>
        {message} <br/>
        <input type="text" value={inputValue} onChange={inputHandler} />
        <button onClick={action}>Submit</button>
      </div>
    )
  }
}
export default UsernameForm