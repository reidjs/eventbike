import React from 'react'

const Flash = ({message, flashMessage}) => {
  console.log('flash: ', message)
  return (
    <div className="flash-container">
      <ul>
        <li>flash message here</li>
      </ul>
    </div>
  );
}

export default Flash;