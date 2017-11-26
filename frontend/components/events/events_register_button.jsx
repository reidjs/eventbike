import React from 'react';
import Done from 'material-ui-icons/Done';
const EventsRegisterButton = ({event, register, currentUser}) => {
  const handleRegistration = (e) => {
    e.preventDefault();
    // debugger
    register(event.id, currentUser.id);
    // console.log('Register')
  }
  
  return (
    <button onClick={handleRegistration}><Done /></button>
  )
}

export default EventsRegisterButton;