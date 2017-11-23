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
    e.preventDefault();
    const user = {username: this.props.username, password: this.state.password}
    this.props.signup(user)
  }
  handleBack(e) {
    this.props.history.push('/signin')
    this.props.reset()
  }
  render() {
    const errorList = this.props.errors.session.map((err) => {
      return <li>{err}</li>
    })
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Hello {this.props.username}! Enter a password to get started.</h2>
        <label>username
          <p>{this.props.username}</p>
          <button onClick={this.handleBack}>Edit</button>
        </label>
        <label>Password
        <input type="password" placeholder="Enter your password." value={this.state.password} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Sign up" />
        
        <ul>
          {errorList}
        </ul>
      </form>
    )
  }
}
export default SignupForm