//This needs to be the show show container with basic information 
import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import EventsBookmarkButton from './events_bookmark_button';
import BookmarkBorder from 'material-ui-icons/BookmarkBorder';
import Done from 'material-ui-icons/Done'; //registration button


const EventsListItem = ({event, register, bookmark}) => {
  const handleRegistration = (e) => {
    e.preventDefault();
    register();
    console.log('Register')
  }
  const handleBookmark = (e) => {
    e.preventDefault();
    bookmark();
    console.log('bookmark')
  }
  const categoryGoesHere = "#";
  const categoryPath = `events/${categoryGoesHere}`
  const bookmarkPath = `events/${event.id}/bookmark`
  const fillerDateTime = "Sun, Dec 5 6:00 PM"
  const fillerVenue = "San Francisco Track"
  return (
    <li>
      <div className="event-container">
        <div className="top-row">
          <div className="event-container-img">

          </div>
          <div className="event-container-body">
            <div>
            <h3>{fillerDateTime}</h3>
            <h2>{event.title}</h2>
            <h4>{fillerVenue}</h4>
            </div>
            <div className="event-footer">
              <Link to={categoryPath}>#Category</Link>
              <div className="event-container-actions">
              <button onClick={handleRegistration}><Done /></button>
              <button onClick={handleBookmark}><BookmarkBorder /></button>
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