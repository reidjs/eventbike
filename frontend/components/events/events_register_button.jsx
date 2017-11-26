import React from 'react';
import Done from 'material-ui-icons/Done';
import { ProtectedFunction } from '../../util/route_util';
import EventsSigninModal from './events_signin_modal';
//warning: O(n) operation
// const userAttendingEvent = (eventId, user) => {
//   let numEvent = user.attending_events.length 
//   user.attending_events.forEach((event) => {
//     if (event === eventId)
//       return true 
//   })
// }
class EventsRegisterButton extends React.Component {
  constructor(props){
    super(props)
    
    // debugger
    this.userIsRegistered = this.userIsRegistered.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.showModal = true;    
  }
  userIsRegistered() {

    if (this.props.currentUser &&
        this.props.currentUser.attending_events.indexOf(this.props.event.id) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('component will update')
  //   this.userRegistered = this.userIsRegistered();
    
  // }
  // componentWillReceiveProps(nextProps) {
    // if (nextProps.currentUser.attending_events !== this.props.currentUser.attending_events) {
    //   console.log('new props received')
    // }
  // }
  handleRegistration(e) {
    e.preventDefault();
    //logic here to make sure there is a logged in user 
    if (this.props.currentUser) {
      this.props.register(this.props.event.id, this.props.currentUser.id);  
    } else {
      // render modal 
      console.log(this.showModal)
      this.showModal = false;

    }
    // console.log('Register')
  }

  render() {
    let myClass
    this.userIsRegistered() ? myClass="active" : myClass = "";
    let myTest = this.showModal ? "true" : null
    console.log("test", myTest)
    // debugger
    return (
      <span>
        <button className={myClass} onClick={this.handleRegistration}><Done /></button>
        <EventsSigninModal open={myTest}/>
      </span>
    )
  }
}
// const EventsRegisterButton = ({event, register, currentUser}) => {
//   const handleRegistration = (e) => {
//     e.preventDefault();
//     // debugger
//     register(event.id, currentUser.id);
//     // console.log('Register')
//   }
//   //check if user is already registered 

  
//   return (
//     <button onClick={handleRegistration}><Done /></button>
//   )
// }

export default EventsRegisterButton;