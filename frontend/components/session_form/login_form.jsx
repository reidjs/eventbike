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
    const errorList = this.props.errors.session.map((err) => {
      return <li>{err}</li>
    })
    return(
      <form onSubmit={this.handleSubmit}>
        {/* image here */}
        <h2>Welcome back {this.props.username}! Enter your password to login.</h2>
        <label>Password
        <input type="password" value={this.state.password} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Log In" />
        <button onClick={this.handleBack}>Backwards</button>
        <ul>
          {errorList}
        </ul>
      </form>
    )
  }
  
}

export default LoginForm