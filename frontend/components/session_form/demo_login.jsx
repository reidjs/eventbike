import React from 'react'

class DemoLogin extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    console.log(this)
    this.props.history.push('/signin')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Demo User</button>
      </div>
    )
  }
}

export default DemoLogin