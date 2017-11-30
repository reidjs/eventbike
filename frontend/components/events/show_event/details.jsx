import React from 'react';

const Details = ({details, location, date}) => {
  return (
    <div className="details">
      <section className="main">
        {details}
      </section>
      <section className="other">
        {location}
        {date}
      </section>
    </div>
  )
}

export default Details