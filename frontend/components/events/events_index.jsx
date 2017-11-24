import React from 'react'

class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.status = 0;
    this.state={events: {}}
  }
  componentDidMount() {
    // console.log(this.props.getevents)
    setTimeout(this.props.getevents, 2000); //artificial delay
    //spinner now 
  }
  componentWillReceiveProps(nextProps) {
    const events = nextProps.events
    this.status = 1;
    this.setState({events});
  }
  render() {
    console.log(this.state.events)
    let myClass
    this.status === 0 ? (myClass = "loader") : (myClass = "showEvents")
    let eventsList = this.props.events.map((event) => {
      return <li>{event.title}</li>
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