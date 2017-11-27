import React from 'react';
import EventsRegisterButton from '../events_register_button';
import EventsBookmarkButton from '../events_bookmark_button';
const ActionBar = ({event, register, unregister, bookmark, unbookmark, currentUser}) => {
  return (
    <div>
      <EventsRegisterButton 
                              event={event}
                              register={register}
                              unregister={unregister}
                              currentUser={currentUser}/>
      <EventsBookmarkButton
                          event={event}
                          bookmark={bookmark}
                          unbookmark={unbookmark}
                          currentUser={currentUser}/>
    </div>
  )
}

export default ActionBar;