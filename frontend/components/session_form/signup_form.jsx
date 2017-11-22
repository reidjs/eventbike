//if state has a potential user and the 'new user flag' is up
//pass this component the username and a dispatch action to signup user
import React from 'react'
// import { Link } from 'react-router-dom';
class SignupForm extends React.Component {
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
    this.props.signup(user)
  }
  handleBack(e) {
    this.props.history.push('/signin')
    this.props.reset()
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Hello {this.props.username}! Enter a password to get started.
        <input type="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" value="Sign up" />
        <button onClick={this.handleBack}>Backwards</button>
      </form>
    )
  }
}
export default SignupForm