import React from 'react';
import { Link } from 'react-router-dom';
class QueryBox extends React.Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="hero-text">
        <h1>Find your next cycling experience</h1>
        {/* <div className="hero-categories">
          <Link to="events/joyride">Go for a joy ride.</Link>
          <Link to="events/race">Compete in a race.</Link>
          <Link to="events/social">Be social.</Link>
        </div> */}
      </div>
    )
  }
}

export default QueryBox