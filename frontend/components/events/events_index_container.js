import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EventsIndex from './events_index';

const mapStateToProps = (state, ownProps) => {
  // console.log("nav dropdown: ", session);
  return {
    //will be state.entities.events
  }
}

const mapDispatchToProps = dispatch => ({
  //will be bookmark and register 
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(EventsIndex));
