import React from 'react';

const Header = ({id,title, image_url, date}) => {
  return (
    <div>
      {id}
      {title}
      {image_url}
      {date}
    </div>
  )
}

export default Header;