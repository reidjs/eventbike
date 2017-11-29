import React from 'react';
import EventsIndex from './events_index';
import SideNav from './side_nav';

class Events extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log(this.props.noSideNav)
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