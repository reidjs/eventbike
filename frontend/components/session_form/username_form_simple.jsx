//if state has a potential user and the 'new user flag' is up
//pass this component the username and a dispatch action to signup user
import React from 'react'
class UsernameFormSimple extends React.Component {
  constructor() {
    super();
    // this.username = props.username
    this.state = ({username: ""});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    // console.log(e.target.value)
    this.setState({username: e.target.value})
  }
  handleSubmit(e) {
    const username = this.state.username
    this.props.lookup(username)
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Enter username
        <input type="text" value={this.state.username} onChange={this.handleChange}/>
        <input type="submit" value="Enter" />
      </form>
    )
  }
}
export default UsernameFormSimple