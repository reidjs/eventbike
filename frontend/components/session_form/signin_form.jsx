//if state has a potential user and the 'new user flag' is up
//pass this component the username and a dispatch action to signup user
import React from 'react'
class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    // this.username = props.username
    this.state = ({username: ""});
    // this.demoText = props.ui.text
    this.demoUsername;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setText = this.setText.bind(this)
    this.errors = []
  }
  handleChange(e) {
    this.setState({username: e.target.value})
    this.errors = []
  }
  handleSubmit(e) {
    if (e)
      e.preventDefault();
    const username = this.state.username
    this.props.lookup(username)
  }
  componentDidMount() {
    this.setState({username: ""})
    this.errors = []
    // this.setText(this.demoText, 0)
    
  }
  componentWillReceiveProps(newProps) {
    if (newProps.ui.demoUser) {
      this.demoUsername = newProps.ui.demoUser.username;
      this.setText(this.demoUsername, 0);
    }
    this.errors = newProps.errors.session;
  }
  //for the demo user
  setText(text, index) {
    setTimeout(() => {
      const username = this.state.username + this.demoUsername[index];
      this.setState({username}, () => {
        if (index < this.demoUsername.length - 1) {
          return this.setText(text, index+1)
        } else {
          this.handleSubmit()
          return ""
        }
      })
    }, 100) 
  }

  render() {
    const errorList = this.errors.map((err) => {
      return <li key={err}>{err}</li>
    })

    return(
      <form onSubmit={this.handleSubmit}>
        <span className="brand">B</span>
        <h1>Let's do this.</h1>
        <h2>Enter a username to sign up or log in.</h2>
        <div className="input-label">
          <label>Username</label><br/>
        </div>
        <div className="input-textbox">
          <input type="text" placeholder="Enter your name." value={this.state.username} onChange={this.handleChange} autoFocus/>
          <ul>
            {errorList}
          </ul>
        </div>
        <input type="submit" value="Get Started" />
      </form>
    )
  }
}
export default SigninForm