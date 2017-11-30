import React from 'react'
import Greeting from './greeting'
import QueryBox from './query_box'
import SplashEventsIndex from './splash_events_index'
import SplashCategoryGrid from './splash_category_grid'
class Splash extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-splash">
        <Greeting />
        <QueryBox ownProps={this.props.ownProps}/>
        <SplashEventsIndex {...this.props}/>
        {/* <SplashCategoryGrid {...this.props}/> */}
      </div>
    )
  } 
}
export default Splash