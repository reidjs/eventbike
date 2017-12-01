import React from 'react'
// import EventsIndexContainer from '../events/events_index_container';
// import EventsShowContainer from '../events/events_show_container';
import { Link } from 'react-router-dom';
import GenericEventsShowList from '../generic_events_show_list';
class SplashEventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.state={events: {}}
  }
  componentDidMount() {
    setTimeout(this.props.getevents, 0); //artificial delay
    //spinner now 
  }
  componentWillReceiveProps(nextProps) {
    const events = nextProps.events
    this.loading = false;
    this.setState({events});
  }
  render() {
    
    return (
      <div className="splash-index-container">
        <h1>Cycling events in San Francisco, California</h1>
        <GenericEventsShowList events={this.props.events}/>
        <Link id="more-events-link" to="/events">See more events</Link>
      </div>  
    )
  }
}

export default SplashEventsIndex
  