export const fetchBookmarkedEvents = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/bookmarks'
    })
  )
}
export const fetchRegisteredEvents = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/registrations'
    })
  )
}