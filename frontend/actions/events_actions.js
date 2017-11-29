import * as EventsAPIUtil from '../util/events_api_util'

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_ERRORS";
export const UNREGISTER_EVENT = "UNREGISTER_EVENT";
export const RESET_EVENT_ERRORS = "RESET_EVENT_ERRORS";


export const receiveEvents = (events) => {
  return ({
    type: RECEIVE_EVENTS,
    events
  })
}
export const receiveEvent = (event) => {
  // console.log("event received",event)
  return ({
    type: RECEIVE_EVENT,
    event
  })
}
//registration should have user object and event object
//registration: {event, user}
export const receiveRegistration = (user) => {
  // debugger
  return ({
    type: REGISTER_EVENT,
    user 
  })
}

export const unRegisterEvent = (registration) => {
  return ({
    type: UNREGISTER_EVENT,
    registration
  })
}

export const receiveEventErrors = (errors) => {
  return ({
    type: RECEIVE_EVENT_ERRORS,
    errors
  })
}

export const resetEventErrors = () => {

  return ({
    type: RESET_EVENT_ERRORS
  })
}



export const getEvents = (query) => dispatch => ( 
  EventsAPIUtil.fetchEvents(query)
  .then(res => (
    dispatch(receiveEvents(res))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getEvent = (eventId) => dispatch => (
  EventsAPIUtil.fetchEvent(eventId)
    .then(res => (
      dispatch(receiveEvent(res))
    ))
);

export const newEvent = (event) => dispatch => (
  EventsAPIUtil.postEvent(event)
    .then(res => (
      dispatch(receiveEvent(res))
    ), err => (
      dispatch(receiveEventErrors(err.responseJSON))
    ))
);

export const getCategory = (category) => dispatch => (
  EventsAPIUtil.fetchCategory(category)
    .then(res => (
      dispatch(receiveEvents(res))
    ))
)

export const getUserEvents = () => dispatch => (
  EventsAPIUtil.fetchUserEvents()
    .then(res => (
      dispatch(receiveEvents(res))
    ))
);

// export const requestRegistration = (eventId) => dispatch => (
//   EventsAPIUtil.postRegistration(eventId)
//     .then(res => (
//       dispatch(receiveRegistration(res))
//     ))
// );

// //The response has an event in it so it can tell the user the event they unregistered from.
// export const removeRegistration = (eventId) => dispatch => (
//   EventsAPIUtil.deleteRegistration(eventId)
//     .then(res => dispatch(unRegisterEvent(res)))
// )

