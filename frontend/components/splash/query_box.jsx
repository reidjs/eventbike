import React from 'react';
import { Link } from 'react-router-dom';
import MainSearch from './main_search'
class QueryBox extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="hero-text">
        <h1>Find your next cycling experience</h1>
        <MainSearch ownProps={this.props.ownProps}/>
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