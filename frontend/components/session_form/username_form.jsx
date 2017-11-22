

import React from 'react'
import { fetchUserByUsername } from '../../util/session_api_util';
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom'
class UsernameForm extends React.Component {
  constructor() {
    super();
    //0: pending, 1: true, -1: false
    //this.props.history.push(`/pokemon/${data.pokemon.id}`
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
    //At this point we should link to the next form
    e.preventDefault();
    const username = this.state.username;
    console.log('ere')
    // browserHistory.push('/test')
    fetchUserByUsername(username)
      .then(username => {
        this.props.history.push('/signin/login')
        return this.setState({verifiedUsername: 1, submitAction: this.props.login})
      })
      .fail(err => {
        this.props.history.push('/signin/signup')
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
    let message;
    let action;
    let inputHandler;
    let inputValue;
    let link;
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