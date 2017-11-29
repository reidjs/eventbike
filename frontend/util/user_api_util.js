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

//pass down the number of tickets requested as well
export const postRegistration = (eventId) => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/registrations`,
      data: { eventId }
    })
  )
}

export const deleteRegistration = (eventId) => {
  return (
    $.ajax({
      method:'DELETE',
      url: `/api/registrations/${eventId}`
    })
  )
}

//we do not need to send the user ID because we kow who current user 
//is on the backend (current_user)
export const bookmark = (event_id) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/bookmarks',
      data: {event_id}
    })
  )
}
//untested
export const unbookmark = (event_id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/bookmarks/${event_id}`,
      
    })
  )
}

// export const fetchBookmarks = () => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/bookmarks`
//   })
// }

export const fetchMyEvents = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/my_events/`
  }) 
}


//fetch events by category 