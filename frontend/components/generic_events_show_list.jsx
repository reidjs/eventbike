import React from 'react';
import EventsShowContainer from './events/events_show_container';

const GenericEventsShowList = ({events}) => {
  let eventsList = events.map((event) => {
    return (
      <div className="col">
        <EventsShowContainer key={event.title} event={event} square={true} />
      </div>
    )
  })
  return (
    <div className="flex-grid">
      {eventsList}
    </div>
  )
}

export default GenericEventsShowList;