import React from 'react'
import Greeting from './greeting'
import QueryBox from './query_box'
import SplashEventsIndex from './splash_events_index'
class Splash extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-splash">
        <Greeting />
        <QueryBox />
        <SplashEventsIndex {...this.props}/>
      </div>
    )
  } 
}
export default Splash