import React from 'react';
import EventsShowContainer from './events/events_show_container';
//expects an array of event objects [{}, {}, {}]
const GenericEventsShowList = ({events}) => {
  if (events === undefined || events.length === 0 || events[0] === undefined)
    return (<div></div>)
  // let events2 = []
  //BAD!
  // for(let i = 0; i < events.length; i++) {
  //   if (events[i] !== undefined)
  //     events2.push(events[i])
  // }
  let eventsList = events.map((event, idx) => {
    if (event) {
      return (
        <div className="col">
          <EventsShowContainer key={`t-${event.id}`} test={"hisdf"} event={event} square={true} />
        </div>
      )
    } else {
      return (<div key={idx}></div>)
    }
  })
  return (
    <div className="flex-grid">
      {eventsList}
    </div>
  )
}

export default GenericEventsShowList;