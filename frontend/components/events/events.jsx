import React from 'react';
import EventsIndex from './events_index';
import SideNav from './side_nav';

class Events extends React.Component {
  render() {
    return (
      <div>
        <SideNav />
        <EventsIndex {...this.props}/>
      </div>
    )
  }
}
export default Events;