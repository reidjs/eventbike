import React from 'react';
import EventsShowContainer from './events/events_show_container';
//expects an array of event objects [{}, {}, {}]
const GenericEventsShowList = ({events}) => {
  if (events === undefined || events.length === 0 || events[0] === undefined)
    return (<div></div>)
  console.log(events)
  let eventsList = events.map((event) => {
    // console.log(event)
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