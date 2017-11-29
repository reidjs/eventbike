import React from 'react';
// import EventsListItem from './events_list_item';
import EventsShowContainer from './events_show_container';
import Modal from 'react-modal';
// import { getCategory } from '../../actions/events_actions';
class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.state={events: {}, modalIsOpen: true}
    this.closeModal = this.closeModal.bind(this);
    this.getEventsFromURL = this.getEventsFromURL.bind(this);
  }
  //we should only send down specific 
  componentWillMount() {
    // console.log(firstpart)
    // debugger
    this.getEventsFromURL(this.props.path);
    
    // console.log(this.props.getevents)
    // setTimeout(this.props.getevents, 0); //artificial delay
    //spinner now 
  }
  getEventsFromURL(path) {
    const firstpart = path.split('/')[1]
    console.log()
    if (firstpart === "categories") {
      // console.log('here')
      this.props.getcategory(path.split('/')[2]);
    } else {
      // this.props.getevents();
      setTimeout(this.props.getevents, 0)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.path !== this.props.path) {
      this.getEventsFromURL(nextProps.path);
    }
    const events = nextProps.events
    this.loading = false;
    const modalIsOpen = false;
    this.closeModal();
    this.setState({events});

  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    // console.log(this.state.events)
    let myClass;
    // let myClass2;
    this.loading ? (myClass = "loader") : (myClass = "showEvents");
    // this.props.squares ? myClass2="events-list squares" : myClass2="events-list";
    // debugger
    //if coming in from the show page, the array is coming in.
    let eventsList = this.props.events.map((event) => {
      return <EventsShowContainer key={event.id} event={event} />
    })
    if (this.loading) {
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={{
            base: 'loading-modal'
          }}
          overlayClassName={{
            afterOpen: 'loading-modalOverlay_after-open'
          }}
          contentLabel="loading Modal"
        >
          <div className="loader"></div>
          
        </Modal>
      )
    } else {
      return (
        <div className="events-index-container">
          <h1>Cycling events in San Francisco, California</h1>
          <div className="showEvents"></div>
            {eventsList}
        </div>  
      )
    }
  }
}
// return <EventsListItem 
//           key={event.title} 
//           event={event} 
//           currentUser={this.props.currentUser}
//           register={this.props.register}
//           bookmark={this.props.bookmark}/>

export default EventsIndex;