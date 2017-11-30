import React from 'react';

const Details = ({details, location, day, month}) => {
  return (
    <div className="details">
      <section className="main">
        {details}
      </section>
      <section className="other">
        {location}
        {day}
        {month}
      </section>
    </div>
  )
}

export default Details