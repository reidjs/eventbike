//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/util/session_api_util.js
export const login = user => {
  return (
    $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: user}
  }));
};

export const signup = user => {
  // console.log(user)
  return (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: user}
  })
)};
//for the nifty one input login we need this
export const fetchUserByUsername = username => {
  // console.log("fetching user ", username)
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${username}`,
    })
  )
}

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
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
      url: '/api/bookmarks',
      data: {event_id}
    })
  )
}