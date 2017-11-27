import React from 'react';
// import EventsListItem from './events_list_item';
import EventsShowContainer from './events_show_container';
class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.state={events: {}}
  }
  componentDidMount() {
    // console.log(this.props.getevents)
    setTimeout(this.props.getevents, 0); //artificial delay
    //spinner now 
  }
  componentWillReceiveProps(nextProps) {
    const events = nextProps.events
    this.loading = false;
    this.setState({events});
  }
  render() {
    // console.log(this.state.events)
    let myClass;
    // let myClass2;
    this.loading ? (myClass = "loader") : (myClass = "showEvents");
    // this.props.squares ? myClass2="events-list squares" : myClass2="events-list";
    let eventsList = this.props.events.map((event) => {
      return <EventsShowContainer key={event.title} event={event} />
    })
    return (
      <div className="events-index-container">
        <h1>Cycling events in San Francisco, California</h1>
        <div className={myClass}></div>
        <ul className="events-list">
          <li className="events-list-item">{eventsList}</li>
        </ul>
      </div>  
    )
  }
}
// return <EventsListItem 
//           key={event.title} 
//           event={event} 
//           currentUser={this.props.currentUser}
//           register={this.props.register}
//           bookmark={this.props.bookmark}/>

export default EventsIndex;