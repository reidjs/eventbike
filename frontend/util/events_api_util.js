export const fetchEvents = (query) => {
  if (query === undefined) {
    return (
      $.ajax({
      method: 'GET',
      url: `/api/events`
    }));
  } else {
    return (
      $.ajax({
      method: 'GET',
      url: `/api/query/${query}`
    }));
  }
  
};
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
