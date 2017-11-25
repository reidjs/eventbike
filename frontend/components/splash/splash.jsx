import React from 'react'
import Greeting from './greeting'
import QueryBox from './query_box'
import SplashEventsIndex from './splash_events_index'
const Splash = () => {
  return (
    <div>
      <Greeting />
      <QueryBox />
      <SplashEventsIndex />
    </div>
  )
}
export default Splash