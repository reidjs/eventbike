import React from 'react';
// import EventsListItem from './events_list_item';
import EventsShowContainer from './events_show_container';
import Modal from 'react-modal';
import EventMap from './event_map';
import values from 'lodash/values';
// import { getCategory } from '../../actions/events_actions';
class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.state={events: {}, modalIsOpen: true}
    this.closeModal = this.closeModal.bind(this);
    this.getEventsFromURL = this.getEventsFromURL.bind(this);
    this.getPage = this.getPage.bind(this);
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
    } else if (firstpart === "query") {
      // this.props.getevents();
      this.props.getevents(path.split('/')[2]);
    } else {
      this.props.getevents();
    }
  }
  getPage(page) {
    this.props.getevents(page)
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
    let pages = [1,2,3,4]
    let pageList = pages.map((page) => {
      return <button className="pageNumber" onClick={() => {this.getPage(page)}}>{page}</button>
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
      // const testEvents = [{lat: 37.773972, lng: -122.431297, id: 1}]
      return (
        <div className="events-index-container">
          <div id="events-index-header">
            {/* <img className="header-img" src="https://res.cloudinary.com/eventbike/image/upload/v1512048569/joseph-barrientos-49318_gnijyi.jpg" /> */}
            <div className="header-txt">San Francisco</div>
          </div>
            <EventMap events={values(this.props.events)}/>
          <div className="showEvents"></div>
            {eventsList}
            <div id="pages"> 
            {pageList}
            </div>
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