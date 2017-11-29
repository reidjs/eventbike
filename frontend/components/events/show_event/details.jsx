import React from 'react';

const Details = ({details}) => {
  return (
    <div className="show-event-details">
      <section className="main">
        {details}
      </section>
    </div>
  )
}

export default Details