//This needs to be the show show container with basic information 
import React from 'react';
import { Link } from 'react-router-dom';
import EventsBookmarkButton from './events_bookmark_button';
import BookmarkBorder from 'material-ui-icons/BookmarkBorder';
import EventsRegisterButton from './events_register_button';

const EventsListItem = ({event, unregister, register, bookmark, currentUser}) => {
  const handleBookmark = (e) => {
    e.preventDefault();
    bookmark(event.id);
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
              <EventsRegisterButton 
                                  event={event}
                                  register={register}
                                  unregister={unregister}
                                  currentUser={currentUser}/>
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