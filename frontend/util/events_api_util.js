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

export const postRegistration = (eventId, userId) => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/registrations/${eventId}/register`,
      data: userId
    })
  )
}

//fetch events by category 