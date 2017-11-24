//This needs to be the show show container with basic information 
import React from 'react';

const EventsListItem = ({event}) => {
  return (
    <li>{event.title}</li>
  )
}

export default EventsListItem;