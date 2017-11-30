import React from 'react';
import EventsRegisterContainer from '../events_register_container';
import EventsBookmarkContainer from '../events_bookmark_container';
import { Link } from 'react-router-dom';
const ActionBar = ({event, register}) => {
  return (
    <div className="action-bar">
      <EventsBookmarkContainer
                          event={event}/>
      <Link to={`/categories/${event.category}`}>{event.category}</Link>

      <EventsRegisterContainer 
                             event={event}/>
    </div>
  )
}

export default ActionBar;