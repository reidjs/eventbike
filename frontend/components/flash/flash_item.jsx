import React from 'react'


const FlashItem = ({flash, hideflash}) => {
  const handleClick = (e) => {
    e.preventDefault();
    hideflash(flash.id)
  }
  return (
      <li className="flash-item">{flash.message}<button onClick={handleClick}>&times;</button></li>
   
  )
}

export default FlashItem