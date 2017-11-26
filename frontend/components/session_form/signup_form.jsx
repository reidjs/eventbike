//if state has a potential user and the 'new user flag' is up
//pass this component the username and a dispatch action to signup user
import React from 'react'
import ModeEdit from 'material-ui-icons/ModeEdit';

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
      return <li key={err}>{err}</li>
    })
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Hey there.</h1>
        <h2>Enter a password to get started.</h2>
        <div className="show-username">
        <label>username</label><br/>
          <p>{this.props.username}</p>
          <button className="edit-button" type="reset" onClick={this.handleBack}><ModeEdit />
</button>
        </div>
        <div className="input-label">
          <label>Password</label>
        </div>
        <input type="password" placeholder="Enter your password." value={this.state.password} onChange={this.handleChange} autoFocus/>
        <ul>
          {errorList}
        </ul>
        <input type="submit" value="Sign up" />
      </form>
    )
  }
}
export default SignupForm