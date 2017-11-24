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

//fetch events by category 