//if state has a potential user and the 'new user flag' is up
//pass this component the username and a dispatch action to signup user
import React from 'react'
class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    // this.username = props.username
    this.state = ({username: ""});
    this.demoText = props.ui.text
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setText = this.setText.bind(this)
  }
  handleChange(e) {
    // console.log(e.target.value)
    this.setState({username: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username
    this.props.lookup(username)
  }
  componentDidMount() {
    this.setState({username: ""})
    this.setText(this.demoText, 0)
    // let index = 0;
    
  }
  setText(text, index) {
    setTimeout(() => {
      const username = this.state.username + this.demoText[index];
      this.setState({username}, () => {
        if (index < this.demoText.length - 1) {
          return this.setText(text, index+1)
        } else {
          return ""
        }
      })
    }, 300) 
  }

  render() {
    const errorList = this.props.errors.session.map((err) => {
      return <li>{err}</li>
    })

    return(
      <form onSubmit={this.handleSubmit}>
        <span className="brand">eB</span>
        <h1>Let's do this.</h1>
        <h2>Enter a username to sign up or log in.</h2>
        <div className="input-label">
          <label>Username</label><br/>
        </div>
        <input type="text" placeholder="Enter your name." value={this.state.username} onChange={this.handleChange}/>
        
        <ul>
          {errorList}
        </ul>
        <input type="submit" value="Get Started" />
      </form>
    )
  }
}
export default SigninForm