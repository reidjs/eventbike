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
  return (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: user}
  })
)};
//for the nifty one input login we need this
export const fetchUserByUsername = username => {
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
