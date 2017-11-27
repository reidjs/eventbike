export const fetchBookmarkedEvents = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/bookmarks'
    })
  )
}