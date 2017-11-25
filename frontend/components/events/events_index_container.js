import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getEvents }from '../../actions/events_actions'
import Events from './events';
import values from 'lodash/values' //convert to array
const mapStateToProps = (state, ownProps) => {
  // console.log("nav dropdown: ", session);
  console.log(state)
  //need to be able to check if the user has bookmarked or registered for event. 
  
  return {
    //will be state.entities.events
    
    events: values(state.entities.events)
  }
}

const mapDispatchToProps = dispatch => {
  // console.log(getEvents)
  // debugger
  //these only hit if the user is logged in
  return ({
  //will be bookmark and register 
    getevents: () => dispatch(getEvents()),
    register: () => {},
    bookmark: () => {}
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Events));
