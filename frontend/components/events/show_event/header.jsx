import React from 'react';

const Header = ({id,title, image_url, date}) => {
  return (
    <div className="event-show-header">
      <div className="event-show-hero-img">
        <img src={image_url} />
      </div>
      <div className="event-show-details">
        <h2>{date}</h2>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Header;