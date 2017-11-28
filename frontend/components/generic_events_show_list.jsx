import React from 'react';
import EventsShowContainer from './events/events_show_container';

const GenericEventsShowList = ({events}) => {
  if (events === undefined || events.length === 0 || events[0] === undefined)
    return (<div></div>)
  let eventsList = events.map((event) => {
    return (
      <div className="col">
        <EventsShowContainer key={event.id} event={event} square={true} />
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