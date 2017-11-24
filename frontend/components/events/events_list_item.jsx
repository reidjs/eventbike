//This needs to be the show show container with basic information 
import React from 'react';
import { Link } from 'react-router-dom';
const EventsListItem = ({event, register, bookmark}) => {
  const categoryGoesHere = "#";
  const categoryPath = `events/${categoryGoesHere}`
  return (
    <li>
      <div className="event-container">
        <div className="top-row">
          <div className="event-container-img">

          </div>
          <div className="event-container-body">
            {event.title}
            <div className="event-footer">
              <Link to={categoryPath}>#Category</Link>
              <div className="bottom-right-buttons">
              <button onClick={register}>RegisterIcon</button>
              <button onClick={bookmark}>BookmarkIcon</button>
            </div>
          </div>
          </div>
        </div>

          
      </div>
    </li>
  )
}

export default EventsListItem;