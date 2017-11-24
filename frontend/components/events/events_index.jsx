import React from 'react';
import EventsListItem from './events_list_item';
class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true; //0: loading
    this.state={events: {}}
  }
  componentDidMount() {
    // console.log(this.props.getevents)
    setTimeout(this.props.getevents, 2000); //artificial delay
    //spinner now 
  }
  componentWillReceiveProps(nextProps) {
    const events = nextProps.events
    this.loading = false;
    this.setState({events});
  }
  render() {
    // console.log(this.state.events)
    let myClass
    this.loading ? (myClass = "loader") : (myClass = "showEvents")
    let eventsList = this.props.events.map((event) => {
      return <EventsListItem key={event.title} event={event}/>
    })
    return (
      <div>
        <div className={myClass}></div>
        <ul>
          {eventsList}
        </ul>
      </div>  
    )
  }
}

export default EventsIndex;