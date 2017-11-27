import React from 'react'
// import EventsIndexContainer from '../events/events_index_container';
import EventsShowContainer from '../events/events_show_container';
class SplashEventsIndex extends React.Component {
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
      return (
        <div className="col">
          <EventsShowContainer key={event.title} event={event} square={true} />
        </div>
      )
    })
    return (
      <div className="splash-index-container">
        <h1>Cycling events in San Francisco, California</h1>
        <div className={myClass}></div>
        <div className="flex-grid">
          {eventsList}
        </div>
      </div>  
    )
  }
}

export default SplashEventsIndex
  
// const SplashEventsIndex = () => {
//   return (
//     <div className="splash-events-container">
//       <h1>Cycle Events in San Francisco, Calfornia</h1>
//       <div className="flex-grid">
//       {/* <EventsIndexContainer noSideNav={true} squares={true}/> */}
//       {/* <div className="flex-grid"> */}
//         <div className="col"></div>
//         <div className="col">em ipsum dolor sit amet, 
//       consectetur adipiscing elit,
//        sed do eiusmod tempor incididunt
//         ut labore et dolore magna aliqua. 
//         Amet aliquam id di</div>
//         <div className="col">em ipsum dolor sit amet, 
//       consectetur adipiscing elit,
//        sed do eiusmod tempor incididunt
//         ut labore et dolore magna aliqua. 
//         Amet aliquam id di</div>
//         <div className="col">em ipsum dolor sit amet, 
//       consectetur adipiscing elit,
//        sed do eiusmod tempor incididunt
//         ut labore et dolore magna aliqua. 
//         Amet aliquam id di</div>
//         <div className="col">ectetur adipiscing elit,
//        sed do eiusmod tempor incididunt
//         ut labore et dolore magna aliqua. 
//         Amet aliquam id di</div>
//         <div className="col">ectetur adipiscing elit,
//        sed do eiusmod tempor incididunt
//         ut labore et dolore magna aliqua. 
//         Amet aliquam id di</div>
//       </div>
      
//       Lorem ipsum dolor sit amet, 
//       consectetur adipiscing elit,
//        sed do eiusmod tempor incididunt
//         ut labore et dolore magna aliqua. 
//         Amet aliquam id diam maecenas ult
//         ricies mi. Sed sed risus pretium 
//         quam vulputate dignissquam id diam maecenas ult
//         ricies mi. Sed sed risus pretium 
//         quam vulputate dignissim suspendi
//         sse. Odio pellentesque diam volutpa
//         t commodo. Senectus et netus et male
//         suada fames. Turpis in eu mi bibendu
//         m. In ante metus dictum at tempor com
//         modo ullamcorper. Et netus et malesua
//         da fames. Amet nisl purus in
//          mollis nunc sed id semper risus. P
//          orttitor rhoncus dolor purus non e
//          nim praesent elementum facilisis. Sit amet riquam id diam maecenas ult
//         ricies mi. Sed sed risus pretium 
//         quam vulputate dignissim suspendi
//         sse. Odio pellentesque diam volutpa
//         t commodo. Senectus et netus et male
//         suada fames. Turpis in eu mi bibendu
//         m. In ante metus dictum at tempor com
//         modo ullamcorper. Et netus et malesua
//         da fames. Amet nisl purus in
//          mollis nunc sed id semper risus. P
//          orttitor rhoncus dolnunc sed id semper risus. P
//          orttitor rhoncus dolor purus non e
//          nim praesent elementum facilisis. Sit amet riquam id diam maecenas ult
//         ricies mi. Sed sed risus pretium 
//         quam vulputate dignissim suspendi
//         sse. Odio pellentesque diam volutpa
//         t commodo. Senectus et netus et male
//         suada fames. Turpis in eu mi bibendu
//         m. In ante metus dictum at tempor com
//         modo ullamcorper. Et netus et malesua
//         da fames. Amet nisl purus in
//          mollis nunc sed id semper risus. P
//          orttitor rhoncus dolnunc sed id semper risus. P
//          orttitor rhoncus dolor purus non e
//          nim praesent elementum facilisis. Sit amet riquam id diam maecenas ult
//         ricies mi. Sed sed risus pretium 
//         quam vulputate dignissim suspendi
//         sse. Odio pellentesque diam volutpa
//         t commodo. Senectus et netus et male
//         suada fames. Turpis in eu mi bibendu
//         m. In ante metus dictum at tempor com
//         modo ullamcorper. Et netus et malesua
//         da fames. Amet nisl purus in
//          mollis nunc sed id semper risus. P
//          orttitor rhoncus dolnunc sed id semper risus. P
//          orttitor rhoncus dolor purus non e
//          nim praesent elementum facilisis. Sit amet riquam id diam maecenas ult
//         ricies mi. Sed sed risus pretium 
//         quam vulputate dignissim suspendi
//         sse. Odio pellentesque diam volutpa
//         t commodo. Senectus et netus et male
//         suada fames. Turpis in eu mi bibendu
//         m. In ante metus dictum at tempor com
//         modo ullamcorper. Et netus et malesua
//         da fames. Amet nisl purus in
//          mollis nunc sed id semper risus. P
//          orttitor rhoncus dolor purus non e
//          nim praesent elementum facilisis. Sit amet riim suspendi
//         sse. Odio pellentesque diam volutpa
//         t commodo. Senectus et netus et male
//         suada fames. Turpis in eu mi bibendu
//         m. In ante metus dictum at tempor com
//         modo ullamcorper. Et netus et malesua
//         da fames. Amet nisl purus in
//          mollis nunc sed id semper risus. P
//          orttitor rhoncus dolor purus non e
//          nim praesent elementum facilisis. Sit amet risus nullam eget felis eget nunc lobortis mattis. Vivamus arcu felis bibendum ut tristique. Sed arcu non odio euismod lacinia at quis risus sed. Gravida cum sociis natoque penatibus et. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lacus sed turpis tincidunt id aliquet risus feugiat.
//     </div>
//   )
// }

