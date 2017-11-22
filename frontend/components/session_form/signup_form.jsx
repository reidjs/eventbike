//if state has a potential user and the 'new user flag' is up
//pass this component the username and a dispatch action to signup user
import React from 'react'
import { Link } from 'react-router-dom'
class SignupForm extends React.Component {
  constructor() {
    super();
    // this.username = props.username
    this.state = ({password: ""});
  }

  render() {
    return(
      <div>Signup form goes here</div>
    )
  }
  
}

export default SignupForm