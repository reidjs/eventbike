import React from 'react';

const Header = ({id,title, image_url, creator_name, month, day}) => {
  return (
    <div className="event-show-header">
      <div className="event-show-hero-img">
        <img src={image_url} />
      </div>
      <div className="event-show-details">
        <div className="date-header">
          <span>{month}</span>
          <span>{day}</span>
        </div>
        <h1>{title}</h1>
        <h3>By {creator_name}</h3>
      </div>
    </div>
  )
}

export default Header;