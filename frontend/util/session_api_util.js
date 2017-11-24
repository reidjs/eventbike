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