import React from 'react';
import EventsIndex from './events_index';
import SideNav from './side_nav/side_nav';

class Events extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="events-container">
        
        {this.props.noSideNav === undefined && 
          <SideNav />
        }
        <EventsIndex {...this.props}/>
      </div>
    )
  }
}
export default Events;