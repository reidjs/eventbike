export const fetchEvents = (query) => {
  if (query === undefined) {
    return (
      $.ajax({
      method: 'GET',
      url: `/api/page/1`
    }));
  } else if (typeof query === "number") {
    return (
      $.ajax({
        method: 'GET',
        url: `/api/page/${query}`
      })
    )
    
  } else {
    return (
      $.ajax({
      method: 'GET',
      url: `/api/query/${query}`
    }));
  }
};
export const fetchAllEvents = () => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/events`
    })
  )
}

export const fetchEvent = (eventId) => {
  return (
    $.ajax({
    method: 'GET',
    url: `/api/events/${eventId}`
  }));
};

export const postEvent = (event) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/events',
      data: {event: event}
    })
  )
}

export const fetchCategories = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/categories'
    })
  )
}
//sends up events matching category. CASE SENSITIVE
export const fetchCategory = (category) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/categories/${category}`
    })
  )
}

export const fetchUserEvents = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/my_events/`
  }) 
}
export const fetchRegisteredEvents = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/my_tickets/`
  }) 
}
export const fetchBookmarkedEvents = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/my_bookmarks/`
  }) 
}

export const deleteEvent = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${eventId}`
  })
}

export const getAddress = (query) => {
  let mapsURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  let encodedQuery = encodeURIComponent(query);
  let apiKey = "&key=AIzaSyDkREocgFR4OI0hcwrvDINxt0CuM0nKAgw"
  // let apiKey = ENV["google_geocode_key"]
  return $.ajax({
    method: 'GET',
    url: `${mapsURL}${encodedQuery}${apiKey}`
  })
}