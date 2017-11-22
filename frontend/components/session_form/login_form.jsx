//If state has a potential user and their account exists 
import React from 'react'
class LoginForm extends React.Component {
  constructor() {
    super();
    // this.username = props.username
    this.state = ({password: ""});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
    
  }
  handleChange(e) {
    // console.log(e.target.value)
    this.setState({password: e.target.value})
  }
  handleSubmit(e) {
    const user = {username: this.props.username, password: this.state.password}
    this.props.login(user)
  }
  handleBack(e) {
    this.props.history.push('/signin')
    this.props.reset()
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Welcome back {this.props.username}! Enter your password to login.
        <input type="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" value="Log In" />
        <button onClick={this.handleBack}>Backwards</button>

      </form>
    )
  }
  
}

export default LoginForm