export const fetchEvents = () => {
  return (
    $.ajax({
    method: 'GET',
    url: '/api/events'
  }));
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