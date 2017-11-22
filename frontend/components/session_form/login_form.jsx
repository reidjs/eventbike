//If state has a potential user and their account exists 
import React from 'react'
class LoginForm extends React.Component {
  constructor() {
    super();
    // this.username = props.username
    this.state = ({password: ""});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    // console.log(e.target.value)
    this.setState({password: e.target.value})
  }
  handleSubmit(e) {
    const user = {username: this.props.username, password: this.state.password}
    this.props.login(user)
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Welcome back! Enter your password to login.
        <input type="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" value="Log In" />
      </form>
    )
  }
  
}

export default LoginForm