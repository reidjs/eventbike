import React from 'react';

const Header = ({title, image_url, date}) => {
  return (
    <div>
      {title}
      {image_url}
      {date}
    </div>
  )
}

export default Header;