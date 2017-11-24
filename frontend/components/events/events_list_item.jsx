//This needs to be the show show container with basic information 
import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import EventsBookmarkButton from './events_bookmark_button'
const handleRegister = (e) => {
  e.preventDefault();
  console.log('Register')
}
const handleBookmark = (e) => {
  e.preventDefault();
  
  console.log('bookmark')
}
const EventsListItem = ({event, register, bookmark}) => {
  const categoryGoesHere = "#";
  const categoryPath = `events/${categoryGoesHere}`
  const bookmarkPath = `events/${event.id}/bookmark`
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
              <Link to={bookmarkPath}>BOomark</Link>
              <button onClick={handleBookmark}>BookmarkIcon</button>
            </div>
          </div>
          </div>
        </div>

          
      </div>
    </li>
  )
}
{/* <ProtectedRoute path={bookmarkPath} component={EventsBookmarkButton}/> */}
{/* <button onClick={handleRegister}>RegisterIcon</button> */}

export default EventsListItem;