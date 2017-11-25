//If state has a potential user and their account exists 
import React from 'react'
class LoginForm extends React.Component {
  constructor() {
    super();
    // this.username = props.username
    this.state = ({password: ""});
    this.demoPassword;
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.setText = this.setText.bind(this);
    
    
  }
  handleChange(e) {
    // console.log(e.target.value)
    this.setState({password: e.target.value})
  }
  handleSubmit(e) {
    if (e)
      e.preventDefault();
    const user = {username: this.props.username, password: this.state.password}
    this.props.login(user)
  }
  handleBack(e) {
    this.props.history.push('/signin')
    this.props.reset()
  }
  componentDidMount() {
    if (this.props.ui.demoUser) {
      this.demoPassword = this.props.ui.demoUser.password;
      this.setText(this.demoPassword, 0);
    }
  }
  //for the demo user
  setText(text, index) {
    setTimeout(() => {
      const password = this.state.password + this.demoPassword[index];
      this.setState({password}, () => {
        if (index < this.demoPassword.length - 1) {
          return this.setText(text, index+1)
        } else {
          //reset demo user here
          this.handleSubmit()
          return ""
        }
      })
    }, 100) 
  }
  render() {
    const errorList = this.props.errors.session.map((err) => {
      return <li>{err}</li>
    })
    return(
      <form onSubmit={this.handleSubmit}>
        {/* image here */}
        <h1>Welcome back</h1>
        <h2>Enter your password to login.</h2>
        <div className="show-username">
          <label>Username</label>
          <p>{this.props.username}</p>
          <button className="edit-button" onClick={this.handleBack}>Edit
</button>
        </div>
        <div className="input-label">
          <label>Password</label>
        </div>
        <input type="password" placeholder="Enter your password." value={this.state.password} onChange={this.handleChange}/>
        <ul>
          {errorList}
        </ul>
        <input type="submit" value="Log In" />
      </form>
    )
  }
  
}

export default LoginForm