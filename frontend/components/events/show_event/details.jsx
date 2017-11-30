import React from 'react';
// const randomHour = () => (Math.floor(Math.random()*12 + 1))
// const randomAMPM = () => {
//   return Math.random() < 0.5 ? "PM" : "AM" ;
// }
// const randomDay = () => (Math.floor(Math.random(0, 27)))
const Details = ({details, location, day, month, hour, ampm}) => {
  return (
    <div className="details">
      <section className="main">
        {details}
      </section>
      <section className="other">

        <h3>Date and Time </h3>
        <h4>{month}/{day}/2018</h4>
        <h4>at {hour} {ampm}</h4>
        <h3>Location</h3>
        <h4>{location}</h4>

      </section>
    </div>
  )
}

export default Details