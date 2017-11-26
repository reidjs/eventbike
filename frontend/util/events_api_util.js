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

export const deleteRegistration = (eventId, userId) => {
  return (
    $.ajax({
      method:'DELETE',
      url: `/api/events/${eventId}/registrations/${userId}`
    })
  )
}

//fetch events by category 