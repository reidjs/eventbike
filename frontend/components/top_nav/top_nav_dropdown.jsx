import React from 'react'
import { Link, Route } from 'react-router-dom';
import FlashContainer from '../flash/flash_container';
class TopNavDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.flash = props.flash
    this.state = {flash: props.flash}
  }
  componentWillReceiveProps(nextProps) {
    const flash = nextProps.flash;
    this.setState({flash})

  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
  }
  

  render() {
    let myClass; 
    this.state.flash ? myClass="flash" : myClass = "";
    if (!this.props.currentUser) {
      return (
        <div className={`user-dropdown ${myClass}`}>
          <Link to="/signin">SIGN IN</Link>
          <FlashContainer />
        </div>
      )
    } else {
      const userId = this.props.currentUser.id
      return (
        <div className="user-dropdown">
          <Link to={`/users/${userId}/bookmarks`}>{this.props.currentUser.username}</Link>

          <FlashContainer />
          <div className="submenu">{/*Hacky way to have more forgiving dropdown mouse movement*/}</div>
          <ul className="user-dropdown-content">
          {/* //These links should be their own components and display a circle representing their quantity */}
            <li><Link to={`/users/${userId}/bookmarks`}>Saved Events</Link></li>
            <li><Link to={`/users/${userId}/tickets`}>Tickets</Link></li>
            <li><button className="btn btn-primary" onClick={this.handleClick}>Logout </button></li>
          </ul>
        </div>
      )
    }
  }
}

export default TopNavDropDown;


