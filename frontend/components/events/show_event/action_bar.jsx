import React from 'react';
import EventsRegisterContainer from '../events_register_container';
import EventsBookmarkContainer from '../events_bookmark_container';
const ActionBar = ({event, register, unregister, bookmark, unbookmark, currentUser}) => {
  return (
    <div className="action-bar">
      <EventsBookmarkContainer
                          event={event}/>
      <EventsRegisterContainer 
                             event={event}/>
    </div>
  )
}

export default ActionBar;