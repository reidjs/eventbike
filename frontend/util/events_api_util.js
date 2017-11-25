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
      url: `/api/events/${eventId}/registrations`,
      data: {user_id: userId}
    })
  )
}

//fetch events by category 